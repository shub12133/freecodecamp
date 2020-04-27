const express = require('express')
const router = express.Router()
const db = require('../models')

// PAth = -'/orders/..
// Get = get all orders 
// response - json 
router.get('/',(req,res)=>{
    db.ORDERS.find().populate(['userId','productId'])
    .then((data)=> res.json(data))
    .catch((err)=>  res.send(err))
})

// PAth -'/orders'
// POST - create a new order 
// response json 
router.post('/' ,(req,res)=>{
    db.ORDERS.create(req.body)
    .then((data)=> res.json(data))
    .catch((err) => res.send(err))
})



module.exports= router