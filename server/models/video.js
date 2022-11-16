// Creating the Schema of the JSON (Creating Model). So that it can return the data from mongodb in json object

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: String,
    url:String,
    description:String
});


//The 1st parameter in mongoose.model is (The name of model)
//The 2nd paramater in mongoose.model is (On which the model need to be created)
// The 3rd paramater in mongoose.model is (The name of collection)
module.exports = mongoose.model('video',videoSchema,'videos')
