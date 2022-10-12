const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
router.get('/user',userController.getAllUser);
router.get('/user/:id',userController.getUserById);
router.post('/user',userController.createUser);
router.put('/user/:id',userController.updateUser);
router.delete('/user/:id',userController.deleteUser);
router.post('/login',userController.login);
module.exports = router;
//