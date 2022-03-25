// -- routes/catRoutes.js
const router = require('express').Router();


module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users WHERE users.id = $1;";
    const value = req.session["id"]
    return db.query(command, [value]).then((data) => {
      console.log(data)
      res.json(data.rows[0]);
    })
    .catch((err)=> res.status(403).send("Error"))
  });

router.post('/update', (req, res)=> {
const command = `UPDATE users SET email = $1, password = $2, first_name=$3, last_name=$4, address=$5, city=$6, phone_number=$7 WHERE id=$8;`
const newMail = req.body.email 
const newPassword = req.body.password
const newFirstName = req.body.first_name
const newLastName = req.body.last_name
const newAddress = req.body.address
const newCity = req.body.city
const newPhoneNumber = req.body.phone_number
const userId = req.session["id"]
const value = [newMail, newPassword, newFirstName, newLastName, newAddress, newCity, newPhoneNumber, userId]
db.query(command, value).then(()=> {

res.status(200).send(`Informations for user ${userId} updated`)
console.log(`Informations for user ${userId} updated`)
res.redirect('../')
})
.catch(()=> res.status(403)
)
  })

  return router;
}