let mongoose = require("mongoose");


//creating class book

let contactModel = mongoose.Schema({
    name : String,
    email : String,
    number : Number

},{
    collection :"contacts"
});

module.exports = mongoose.model("Contact",contactModel);