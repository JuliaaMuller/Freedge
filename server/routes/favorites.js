const router = require("express").Router();
const axios = require("axios");

module.exports = (db) => {

  router.get("/", (req, res) => {
    const queryString = `SELECT * FROM favorites WHERE favorites.user_id = $1`
    // const values =[req.session["id"]]
    const values = [3]

    db.query(queryString, values)
    .then((data) => {
      let favListId = [];
      console.log(data.rows)
      for (let item of data.rows) {
        favListId.push(item.recipe_id);
        console.log('result',favListId)
      }
      res.status(200).json(favListId)
    })
    .catch((e) => res.send(e));
    });
    return router;
  };
  
  