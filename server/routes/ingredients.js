// -- routes/catRoutes.js
const router = require("express").Router();

function insertIntoDb(category, user_id, db) {
  console.log(category);
  for (let item of category) {
    db.query(
      "INSERT INTO ingredients (name, quantity, category, user_id) VALUES ($1, $2, $3, $4 ) RETURNING *",
      [item.name, item.quantity, item.category, user_id]
    ).then((res) => console.log(res.rows[0]));
  }
}

module.exports = (db) => {
  // all routes will go here
  router.get("/", (req, res) => {
    const command = "SELECT * FROM ingredients";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/", (req, res) => {
    const data = req.body.data;
    const { userId, vegetable, fruit, dairy, protein, grain, other } = data;
    console.log(vegetable);
    if (vegetable.length > 0) {
      insertIntoDb(vegetable, userId, db);
    }
    if (fruit.length > 0) {
      insertIntoDb(fruit, userId, db);
    }
    if (dairy.length > 0) {
      insertIntoDb(dairy, userId, db);
    }
    if (protein.length > 0) {
      insertIntoDb(protein, userId, db);
    }
    if (grain.length > 0) {
      insertIntoDb(grain, userId, db);
    }
    if (other.length > 0) {
      insertIntoDb(other, userId, db);
    }
  });

  return router;
};
