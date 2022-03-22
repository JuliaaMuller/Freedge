
const router = require('express').Router();


module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
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

  return router;
}