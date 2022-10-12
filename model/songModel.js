const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectId = Schema.ObjectId
const songSchema = new Schema({
    id:objectId,
    name:String,
    artist:String,

    movieName:String,
    year:Number,
    
})
module.exports = mongoose.model('song',songSchema)

