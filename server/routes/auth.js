// -- routes/register.js
const bcrypt = require("bcryptjs");
const router = require("express").Router();


module.exports = (db) => {
  router.post("/register", (req, res) => {
    const queryString = `SELECT * FROM users WHERE email = $1;`;
    const values = [req.body["email"]];
    db.query(queryString, values).then((data) => {

      if (data.rows.length > 0) {
        console.log("This user already exists");
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
    })
    .catch((e) => res.send(e));
  });

  router.post("/login", (req, res) => {
    const user = req.body;
    const email = user.email;
    const password = user.password
    const queryString = `SELECT * FROM users WHERE users.email = $1;`;
    const values = [email];
 
    return db.query(queryString, values)
      .then((data) => {
        const userHashedPass = data.rows[0]["password"]
        const user_id = data.rows[0]["id"]
        const cookie = req.session
        const match = bcrypt.compareSync(password, userHashedPass)
        cookie["id"] = user_id;
        cookie["name"] = data.rows[0]["first_name"]

        if(!match) {
          return console.log("The password you entered is not correct");          
        }

        console.log(`Logging in as: id ${user_id}, name ${data.rows[0]["first_name"]}`)
        // res.redirect("../");
      })
      .catch((e) => console.log("This user does not exist!"));
  });

  router.post("/logout", (req, res) => {
    console.log(`Logging out as: id ${req.session["first_name"]}`);
    req.session = null;
    // res.redirect("../");
  });
  return router;
};
