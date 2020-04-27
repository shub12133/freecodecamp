// create connection to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shub123433:Shub@12133@cluster0-6pr0w.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const USERS = require('./users')
const PRODUCTS = require('./products')
const ORDERS = require('./orders')
module.exports = {
    USERS ,
    PRODUCTS,
    ORDERS
}