const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')

const db="https://cloud.mongodb.com/v2/6373aa4e13ca3c1f7de74880#metrics/replicaSet/6373ab5459c198791cc94739/explorer/videoplayer"
mongoose.Promise=global.Promise
mongoose.connect(db,function(err){
    if(err){
        console.error("Error! "+err)
    }
});
router.get('/',(req,res)=>{
    res.send('ap1 works');
});



module.exports=router