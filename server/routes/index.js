/*Nikhileswar Reddy Duvvuru 301167843 14 Feb 2021*/
let express = require('express');
let router = express.Router();
const fs = require("fs");
let indexController = require('../controller/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET home page. */
router.get('/home', indexController.displayHomePage);
/* GET about page. */
router.get('/about', indexController.displayAboutPage);
/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);
/* GET services page. */
router.get('/services', indexController.displayServicesPage);
/* GET Contact us page. */
router.get('/contact',  indexController.displayContactPage);
/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

/*Get Resume pdf*/
router.get("/resume",indexController.resumeDisplay);

module.exports = router;
