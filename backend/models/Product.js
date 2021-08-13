const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    }
    
});

const Product = mongoose.model("product",productSchema)

module.exports = Product;