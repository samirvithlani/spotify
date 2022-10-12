const songPlayList = require('../model/song_playListModel');
exports.createSongPlayList = (req,res)=>{
    const songPlayList = new songPlayList(req.body);
    songPlayList.save((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.getAllSongPlayList = (req,res)=>{
    songPlayList.find((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.getSongPlayListById = (req,res)=>{
    songPlayList.findById(req.params.id,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.updateSongPlayList = (req,res)=>{
    songPlayList.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.deleteSongPlayList = (req,res)=>{
    songPlayList.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.deleteSongFromPlayList = (req,res)=>{
    songPlayList.findByIdAndUpdate(req.params.id,{$pull:{songs:req.body.songId}},(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.getAllPlayListData = (req,res)=>{

    songPlayList.findop().populate({
        path:'songs',
    }).exec((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
