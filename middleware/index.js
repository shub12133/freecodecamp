function isLoggedIn(req,res,next){
    if(req.user){
        return next()
    }else{
        res.redirect('/users/login')
    }
}

module.exports = isLoggedIn;