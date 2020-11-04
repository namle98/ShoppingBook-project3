const express = require('express')

const router = express.Router()

const {create} = require('../controllers/product.js')
const {
    requireSignin,
    isAuth,
    isAdmin
} = require('../controllers/auth.js')
const {userById} = require('../controllers/user.js')

router.post('/product/create:userId', requireSignin, isAuth, isAdmin, create)
router.param("userId", userById)

module.exports = router 
