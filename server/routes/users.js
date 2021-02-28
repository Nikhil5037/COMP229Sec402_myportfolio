/*Nikhileswar Reddy Duvvuru 301167843 14 Feb 2021*/
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
