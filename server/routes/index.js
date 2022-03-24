var express = require('express');
const { route } = require('../app');
var router = express.Router();

module.exports = () => {
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user/', function(req, res, next) {
  if(req.session){
const user_id = req.session["id"]
const name = req.session["name"]
console.log(user_id)
console.log(name)
  res.status(200).send({id:user_id ,name:name})
  }
})
  return router
}

