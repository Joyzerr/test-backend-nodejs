const mongo = require('mongoose');
const { Schema } = mongo;

const Product = new Schema(
    {
        title: String,
        description: String,
        price: Number,
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
          },
    });
module.exports = mongo.model('Product',Product);