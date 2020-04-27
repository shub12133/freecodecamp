const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name : {
        type: String
    },
    email : {
        type : String,
        unique : true,
        required : ["Please enter an Email"]
    },
    password : {
        type : String,
        required : true,

    }
    
    
    
});

const USERS = mongoose.model('USERS' , userSchema)

// Methods in mongoose - to perform certain operation m like hashing 
// callback - a function passed as an argument to another function
//brcypt.genSalt
const createUser = function(newUser, callback){
        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(newUser.password,salt, function(err,hash){
                newUser.password = hash
                newUser.save(callback)
            })
        })
};


// Methods - comparePassword 
// isMatch - return Boolean
const comparePassword = function(userPassword, hash, callback){
    bcrypt.compare(userPassword , hash, function(err,isMatch){
        if(err) throw err ;
        callback(null , isMatch)
    })
}

// Get User By Email 
const getUserByEmail = function(email,callback){
    const query = {email :email}
    USERS.findOne(query,callback)
}

// Get User By Id 
const getUserById = function(id,callback){
    USERS.findById(id, callback)
}

module.exports = {
    USERS,
    createUser,
    comparePassword,
    getUserByEmail,
    getUserById
}