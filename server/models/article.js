const mongoose = require('mongoose');
const { setFlagsFromString } = require('node:v8');
const Schema = mongoose.Schema;
const Article = new Schema({
    title : {
        type: String,
        required: true
    },
    published : {
        type: Date,
        default: Date.now
    },
    categoryId : {
        type: String,
        required: true
    },
    writerId : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Article', Article);
