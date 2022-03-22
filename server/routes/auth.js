// -- routes/register.js
const bcrypt = require("bcryptjs");
const router = require("express").Router();

module.exports = (db) => {
  router.post("/register", (req, res) => {
    console.log("here!");
    const queryString = `SELECT * FROM users WHERE email = $1;`;
    const values = [req.body["email"]];
    db.query(queryString, values).then((data) => {

      if (data.rows.length > 0) {
        res.status(409).send("This user already exists");
        return;
      }

      const command = `INSERT INTO users (first_name, last_name, email, password, phone_number, address, city )
      VALUES  ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
      const user = req.body;
      user.password = bcrypt.hashSync(user.password, 12);
      uservalues = [
        user.first_name,
        user.last_name,
        user.email,
        user.password,
        user.phone_number,
        user.address,
        user.city,
      ];

      db.query(command, uservalues)
        .then((res) => {
          req.session.userId = user.id;
          console.log(res.rows[0])
        })
        .catch((e) => res.send(e));
    });
  });

  router.post("/login", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    const email = user.email;
    const queryString = `SELECT * FROM users WHERE email = $1;`;
    const values = [email];
    db.query(queryString, values)
      .then((data) => {
        if (data.rows[0]["password"] !== password) {
          return res.status(403).send("The password you entered is not correct");
        }
        req.session.userId = user.id;
        res.redirect("../");
      })
      .catch(() => alert("This user does not exist"));
  });

  router.post("/logout", (req, res) => {
    console.log(`Logging out as: id ${req.session["first_name"]}`);
    req.session = null;
    res.redirect("../");
  });
  return router;
};
