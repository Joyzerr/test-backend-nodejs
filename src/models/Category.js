const mongo = require('mongoose');
const { Schema } = mongo;

const Category = new Schema(
    {
        title: String,
        description: String,
    });
module.exports = mongo.model('Category',Category);