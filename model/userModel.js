const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectId = Schema.ObjectId

const userSchema = new Schema({
    id:objectId,
    name:String,
    email:String,
    password:String,
    status:Boolean

})

module.exports = mongoose.model('user',userSchema)