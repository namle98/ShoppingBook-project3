const User = require('../models/user')

exports.userById = (req, res, id, next) => {
    User.findById(id).exec((error, user) => {
        if(error || !user){
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user
        next()
    })
}