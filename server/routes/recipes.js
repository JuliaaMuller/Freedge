const router = require("express").Router();
const axios = require("axios");

module.exports = (db) => {
  // all routes will go here
  router.get("/", (req, res) => {
    const command =
      "SELECT array_agg(name) AS name, array_agg(quantity) AS quantity, category FROM ingredients WHERE user_id = 1 GROUP BY category;";
    db.query(command).then((data) => {
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
      const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryString}&number=3&ranking=1&apiKey=${
        process.env.API_KEY || process.env.SECONDARY_API_KEY
      }`;

      axios
        .get(url)
        .then((response) => res.json(response.data))
        .catch((err) => console.log(err));
    });
  });

  return router;
};
