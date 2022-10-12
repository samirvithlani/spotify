const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectId = Schema.ObjectId
const songPlayListSchema = new Schema({
    id:objectId,
    name : String,
    song:{
        type:Schema.Types.ObjectId,
        ref:'song'
    },
    playList:{
        type:Schema.Types.ObjectId,
        ref:'playList'
    }
})
module.exports = mongoose.model('songPlayList',songPlayListSchema)