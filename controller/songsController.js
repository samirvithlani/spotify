const songs = require('../model/songModel')
exports.createSong = (req,res)=>{
    const song = new songs(req.body)
    song.save((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.getAllSongs = (req,res)=>{
    songs.find((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.getSongById = (req,res)=>{
    songs.findById(req.params.id,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.updateSong = (req,res)=>{
    songs.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.deleteSong = (req,res)=>{
    songs.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
