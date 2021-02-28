let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controller/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


//GET route for books list page - Read
router.get('/', contactController.displayContactList);

  //GET route for displaying the Add page - Create
  router.get('/add',requireAuth, contactController.displayAddPage);
  //POST route for Processing the Add page - Create
  router.post('/add',requireAuth, contactController.processAddPage);
  //GET route for displaying the edit page - UPDATE
  router.get('/edit/:id',requireAuth, contactController.displayEditPage);
  //POST route for Processing the EDIT page - UPDATE
  router.post('/edit/:id',requireAuth, contactController.processEditPage);
   //GET route for performing the delete - Deletion
   router.get('/delete/:id',requireAuth, contactController.performDelete);
  module.exports=router;
