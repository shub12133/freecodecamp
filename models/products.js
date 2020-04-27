const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productsSchema = new Schema({
    productName : {
        type : String
    },
    price : {
        type : Number
    },
    image :{
        type : String,
    },
    createdOn:{
        type : Date,
        default : Date.now()
    }
})

const PRODUCTS = mongoose.model('PRODUCTS' , productsSchema)

module.exports = PRODUCTS;
