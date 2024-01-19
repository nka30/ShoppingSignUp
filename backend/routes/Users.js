const express=require('express')
const router=express.Router()
const bcrypt=require("bcrypt")
const {Users}=require('../models')
router.post('/',async (req,res)=>{
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    const{email,pass, confirmPass,firstName,lastName,address,option}=req.body
    if (emailPattern.test(email)!=true) return res.json({error:"Email is not of proper format"})
    if (pass!=confirmPass) return res.json({error: "Password and Confirm Password do not match"})
    bcrypt.hash(pass,10).then((hash)=>{
        Users.create({
            email:email,
            password:hash,
            firstName:firstName,
            lastName:lastName,
            address:address,
            opAds:option
        })
        res.json("Success!")
    })
})
module.exports=router