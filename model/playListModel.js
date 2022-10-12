const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const objectId = Schema.ObjectId
const playListSchema = new Schema({
    id:objectId,
    name:String,
    songs:[{
        type:Schema.Types.ObjectId,
        ref:'song'
    }],
    status:Boolean,
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
})
module.exports = mongoose.model('playList',playListSchema)