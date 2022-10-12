const playList = require("../model/playListModel");

exports.createPlayList = (req, res) => {
  const playLists = new playList(req.body);
  playLists.save((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};
exports.getAllPLayListData = (req, res) => {
  playList
    .find()
    .populate("songs")
    .populate("user")
    .exec((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
};
exports.getAllPlayList = (req, res) => {
  playList.find((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};
exports.getPlayListById = (req, res) => {
  playList.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};
exports.updatePlayList = (req, res) => {
  playList.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};
exports.deletePlayList = (req, res) => {
  playList.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};



exports.filterSong = (req, res) => {

  var songs = []  
    playList.findById(req.params.id, (err, data) => {
        
        songs = data.songs;
        playList.findByIdAndUpdate(req.params.id,{
            $set:{
                songs:songs.filter((song)=>{
                    return song != req.body.songId
                })
            },
        },(err,data)=>{
            if(err){
                res.status(500).send({
                    message:err.message
                })
            }else{
                res.send(data)
            }
        })
    });
  
};

    

exports.filterAndremoveOSngFromPlayList = (req, res) => {
  playList.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      const song = data.songs.filter((song) => {
        return song != req.params.songId;
      });
      data.songs = song;
      data.save((err, data) => {
        if (err) {
          res.status(500).send({
            message: err.message,
          });
        } else {
          res.send(data);
        }
      });
    }
  });
};

exports.removeSingleSongFromPlayList = (req, res) => {
  playList.findByIdAndUpdate(
    req.params.id,
    { $pull: { songs: req.body.songId } },

    (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    }
  );
};

exports.removeSongFromPlayList = (req, res) => {
  playList.findByIdAndUpdate(
    req.params.id,
    { $pull: { songs: req.body.songId } },
    { multi: true },
    (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    }
  );
};
