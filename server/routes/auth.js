// -- routes/register.js
const bcrypt = require('bcrypt');
const router = require('express').Router();

module.exports = db => {
  router.post('/register/submit', (req, res) => {
    console.log('here!')
    const queryString = `SELECT * FROM users WHERE email = $1;`;
    const values= [req.body["email"]];
    db.query(queryString, values).then(data => {
      if (res.json(data.rows)) {
      alert("This user already exists")
      } 
      const command = `INSERT INTO users (first_name, last_name, email, password, phone_number, address, city, )
      VALUES  ($1, $2, $3, $4, $5, $6, $7);`
      const user = req.body;
      user.password= bcrypt.hashSync(user.password, 12);
      uservalues = [user.first_name, user.last_name, user.email, user.password, user.phone_number, user.address,user.city]
      db.query(command, uservalues).then( () => {
        req.session.userId = user.id;
    })
    .catch (e => res.send(e))
    
    })
  });

  router.post('/login/submit', (req, res) => {
    const user = req.body;
    user.password= bcrypt.hashSync(user.password, 12);
    const email = user.email
    const queryString = `SELECT * FROM users WHERE email = $1;`;
    const values= [email];
    db.query(queryString, values).then(data => {
      if (res.json(data.rows["password"]!== password)) {
        alert ("The password you entered is not correct")
      }
      req.session.userId = user.id;
      res.redirect('../');
  })
    .catch(()=> alert("This user does not exist"))
  })
  
  router.post('/logout', (req, res) => {
    console.log(`Logging out as: id ${req.session['first_name']}`);
    req.session = null;
    res.redirect('../');
  });
  return router;
};