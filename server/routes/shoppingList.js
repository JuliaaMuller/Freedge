
const router = require('express').Router();


module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM shopping_list WHERE user_id = 1";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });
  router.post('/', (req, res) => {
    const data = req.body;
    const user_id = 1;
    console.log(data);
    const { name, quantity, aisle, image } = data;
    const command = "INSERT INTO shopping_list (name, quantity, aisle, image, user_id) VALUES ($1, $2, $3, $4, $5)";
    db.query(command, [name, quantity, aisle, image, user_id]).then(data => {
      res.status(201).send("Successfully saved!");
    })
  });

  return router;
}