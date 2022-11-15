const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Video = require('../models/video') 

const db = "mongodb+srv://karthik:karTHIK1234@cluster0.fxinup0.mongodb.net/videoplayer?retryWrites=true&w=majority"
mongoose.Promise=global.Promise

mongoose.connect(db,function(err){
    if(err){
        console.error("Error!"+err);
    }
})


router.get('/videos',(req,res)=>{
    console.log("Get Request for all Videos")
    Video.find({})
    .exec(function(err,videos){
        if(err){
            console.log("Error in retreiving videos")
        }
        else{
            res.json(videos)
        }
    })
});



module.exports=router