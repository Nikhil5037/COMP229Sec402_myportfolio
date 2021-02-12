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
  res.render('projects',{ title: "projects",
     AllProjects: [
      {
        Title: "smartdhyana",
        Role: "Developer",
        WebAddress: "https://www.smartdhyana.com/",
        img:"https://smartdhyanablog.files.wordpress.com/2019/08/dhyana_-why-do-you-need-a-device-for-meditation.png",
        description: "Dhyana is a Meditation Ring which Tracks your HRV Values and also calculate your Mindfulnes. A Ring that can Test Your Meditaion and Gives How stresful, Relaxed you are throgh the Meditaion sessions"
      },
    ] }
  );
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
