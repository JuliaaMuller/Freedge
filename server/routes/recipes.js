const router = require("express").Router();
const axios = require("axios");

module.exports = (db) => {
  // all routes will go here
  router.get("/", (req, res) => {
    const userId = req.session["id"];
    const command =
      "SELECT array_agg(name) AS name, array_agg(quantity) AS quantity, category FROM ingredients WHERE user_id = $1 GROUP BY category;";
    db.query(command, [userId]).then((data) => {
      let result = {};

      for (let item of data.rows) {
        const ingredientList = item["name"].map((name, index) => ({
          name: name,
          quantity: item["quantity"][index],
        }));
        result[item["category"]] = ingredientList;
      }

      const queryList = Object.keys(result).map(
        (item) =>
          result[item][Math.floor(Math.random() * result[item].length)].name
      );

      const queryString = queryList.join(",");
        console.log(queryString);
      const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryString}&number=2&ranking=1&apiKey=${process.env.API_KEY
      }`;

      axios
        .get(url)
        .then((response) => res.json(response.data))
        .catch((err) => console.log(err));
    });
  });
  
  router.post("/add/:id", (req, res) => {

    const askQuery = `SELECT * FROM favorites WHERE recipe_id = $1 AND user_id = $2;`
    console.log("req.params add favorites", req.params)
    const queryString = `INSERT INTO favorites(recipe_id, user_id) VALUES ($1, $2) RETURNING *;`
    const values = [req.params["id"], req.session["id"]];
    return db.query(askQuery,values).then((data)=>{ if(!data.rows[0]){

      return db.query(queryString, values)
      .then(() => res.status(200).send("New favorite")) 
    } else {
      res.status(403).send("This favorite has already been added by this user")
    } })
    
    // .catch(()=> res.status(403).send("Error adding this recipe to favorites"))
  })

  return router;
};
