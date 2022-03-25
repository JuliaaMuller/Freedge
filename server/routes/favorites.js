const router = require("express").Router();
const axios = require("axios");

module.exports = (db) => {

  router.get("/", (req, res) => {
    const queryString = `SELECT * FROM favorites WHERE favorites.user_id = $1`
    // const values =[req.session["id"]]
    console.log("**")
    const values = [1]

    return db.query(queryString, values)
    .then((data) => {
      let favListId = [];
      // console.log(data.rows)
      for (let item of data.rows) {
        favListId.push(item.recipe_id);
        // console.log('result',favListId)
      }
      res.status(200).json(favListId)
    })
    .catch((e) => res.send(e));
    });

    router.post("/delete/:id", (req, res) => {
      // console.log("item id:",req.params["id"]);
      console.log("req params",req.params);

      let queryString = `
      DELETE FROM favorites
      WHERE user_id = $1 AND recipe_id = $2;`;
      let values = [ 1, req.params["id"]];
      console.log("req params id",req.params["id"]);
      // console.log("user",req.session['id'])
  
      return db.query(queryString, values)
        .then(() =>  {
        res.status(200).send("Favorite deleted")
        res.redirect("../");
      });
    })
    
    return router;
  };
  
  