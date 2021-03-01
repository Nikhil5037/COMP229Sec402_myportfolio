/*Nikhileswar Reddy Duvvuru 

Comp 229- Web Application development

301167843 27 Feb 2021*/
const { name } = require('ejs');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');


module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {

            res.render('contact/list', {title: 'Business Contacts-List', ContactList: contactList,displayName: req.user ? req.user.displayName : ''});      
        }
    }).sort({name:1}); //sorting by name
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact',displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number,
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });

}

module.exports.displayEditPage= (req, res, next)=> {
    let id =req.params.id;
    Contact.findById(id,(err,editContact)=>{
      if(err){
          console.log(err);
          res.end(err);
      }
      else
      {
          //redirect to book edit page
          res.render('contact/edit',{title :'Edit Contact',contact :editContact,displayName: req.user ? req.user.displayName : ''});
      }
    });


}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number,
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/contact-list');
        }
    });
}