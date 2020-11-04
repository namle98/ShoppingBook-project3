const express = require('express')

const router = express.Router()

const {signup, signin, signout, requireSignin} = require('../controllers/auth.js')
const {userSigupValidator} = require('../validator/index')

router.post('/signup', userSigupValidator , signup)
router.post('/signin', signin)
router.get('/signout', signout)


module.exports = router 
