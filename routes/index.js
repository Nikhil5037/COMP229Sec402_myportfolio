var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects Page' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET about us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});
/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});
/* GET Contact submision Thank You page. */
router.get("/thanku", function(req, res, next) {
  res.render('Thanku', { title: 'Thank You Page' });
});

router.get("/resume",(req, res, next)=>{
    var data =fs.readFileSync('./public/Assets/Resume_Nikhil.pdf');
    res.contentType("application/pdf");
    res.send(data);
});

module.exports = router;
