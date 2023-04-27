const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = require('../model/usermodel')



router.get('/register' , (req , res) =>{
    res.render('register');
} )
router.get ('/login' , (req ,res )=> {
    res.render('login')
})


module.exports = router;    