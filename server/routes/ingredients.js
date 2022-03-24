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
    const user_id = req.session.userId;
    console.log("cookie", user_id);
    const command = "SELECT array_agg(name) AS name, array_agg(quantity) AS quantity, category FROM ingredients WHERE user_id = 1 GROUP BY category;";
    db.query(command).then(data => {
     
      let result = {};

      for (let item of data.rows) {
        const ingredientList = item["name"].map((name, index) => ({name: name, quantity: item["quantity"][index]}));
        result[item["category"]] = ingredientList
      }
      
      res.json(result);

    })
  });

  router.post("/", (req, res) => {
    const data = req.body.data;
    const { userId, vegetable, fruit, dairy, protein, grain, other } = data;
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
    res.status(200).send("Success!");
  });

  router.delete("/:name", (req, res) => {
    const name = req.params.name;

    const command = "DELETE FROM ingredients WHERE name = $1";
    db.query(command, [name]).then(() => res.status(200).send("Deleted successfully")).catch(err => console.log(err))
  })
  return router;
};
