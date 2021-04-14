const mongoose = require('mongoose');
const { setFlagsFromString } = require('node:v8');
const Schema = mongoose.Schema;
const Category = new Schema({
    name:{
        title: String
    } 
});

module.exports = mongoose.model('Category', Category);
