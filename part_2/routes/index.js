//Routor obj. = controller
//Import express and create a router object 
var express = require('express');
var router = express.Router();
//config route handling in the route obj.
//Register a middleware func. to path

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
