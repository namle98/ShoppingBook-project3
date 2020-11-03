const express = require('express')

const router = express.Router()

const {signup, signin, signout} = require('../controllers/user.js')
const {userSigupValidator} = require('../validator/index')

router.post('/signup', userSigupValidator , signup)
router.post('/signin', signin)
router.get('/signout', signout)

module.exports = router 
