const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Video = require('../models/video') 

// path: mongodb+srv://<Database username>:<Database user password>@cluster0.fxinup0.mongodb.net/<Database Name>?retryWrites=true&w=majority
const db = "mongodb+srv://karthik:karTHIK1234@cluster0.fxinup0.mongodb.net/videoplayer?retryWrites=true&w=majority"
mongoose.Promise=global.Promise

//Connecting Mongoose to Mongodb (db is the path of mongodb)
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
            res.send(videos)
        }
    })
});

router.get('/videos/:id',(req,res)=>{
    console.log("Get request to get particular video")
    Video.findById(req.params.id)
    .exec(function(err,video){
        if(err){
            console.log("Error in fetching the video");
        }else{
            res.send(video);
        }
    });
});

router.post('/video',(req,res)=>{
    console.log("post video")
    var newVideo = new Video;
    newVideo.title=req.body.title
    newVideo.url = req.body.url;
    newVideo.description=req.body.description
    newVideo.save(function(err,insertedVideo){
        if(err){
            console.log('Error saving video');
        }else{
            res.send(insertedVideo)
        }
    })

});

//Put request uses findByIdAndUpdate function which takes 4 arguments (id, new_values to be set, if new is true then it returns the updated Video with new values set,function to handle error)

router.put('/videos/:id',(req,res)=>{
    console.log("Update the defined id value");
    Video.findByIdAndUpdate(req.params.id,{
        $set: {title:req.body.title, url:req.body.url, description:req.body.description}
    },
    {
        new:true
    },
    function(err,updatedVideo){
        if(err){
            console.log("Error in updating the video")
        }else{
            res.send(updatedVideo)
        }
    }
    )
});

router.delete('/videos/:id',(req,res)=>{
    console.log("Delete the specified video");
    Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
        if(err){
            console.log("Error in deleting the video")
        }else{
            res.send(deletedVideo)
        }
    })
})







module.exports=router