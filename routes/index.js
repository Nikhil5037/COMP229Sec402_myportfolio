var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
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
        Title: "SMARTDHYANA",
        Role: "Developer",
        WebAddress: "https://www.smartdhyana.com/",
        img:"https://smartdhyanablog.files.wordpress.com/2019/08/dhyana_-why-do-you-need-a-device-for-meditation.png",
        description: "Dhyana is a Meditation Ring which tracks your HRV Values and also calculates your attention. A ring that can test your Meditaion and gives how stressful and relaxed you are through out the Meditaion sessions"
      },
      {
        Title: "BankMuscat InternetBanking",
        Role: "Performance Tester",
        WebAddress: "https://www.bankmuscatonline.com/",
        img:"/Assets/BM.png",
        description: "Bank Muscat is a financial services provider in the Sultanate of Oman providing corporate banking, retail banking, investment banking, treasury, private banking and asset management. Internet Banking application enables customers to conduct a range of financial transactions through the financial institution's website."
      },
      {
        Title: "Commercial Bank International",
        Role: "Performance Tester",
        WebAddress: "https://www.cbiuae.com/",
        img:"/Assets/CBI.jpg",
        description: "CBI is a leading Finance provider in U.A.E. CBI offers a wide range of banking products & services to suit your financial needs."
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
router.get("/home", function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get("/resume",(req, res, next)=>{
    var data =fs.readFileSync('./public/Assets/Resume_Nikhil.pdf');
    res.contentType("application/pdf");
    res.send(data);
});

module.exports = router;
