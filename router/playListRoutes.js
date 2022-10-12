const express = require('express');
const router = express.Router();
const playListController = require('../controller/playListController');

router.get('/playlist',playListController.getAllPlayList);
router.get('/playlist/:id',playListController.getPlayListById);
router.post('/playlist',playListController.createPlayList);
router.put('/playlist/:id',playListController.updatePlayList);
router.delete('/playlist/:id',playListController.deletePlayList);
router.put('/playlist1/:id',playListController.filterSong);
router.get('/playlistdata',playListController.getAllPLayListData);
module.exports = router;

