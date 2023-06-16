const express = require('express');
const userCtrl = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.route('/api/users/register').post(userCtrl.createUser);

router.route('/api/users').get(userCtrl.getAllUsers);

router.get('/api/users/photo/:userId');
router.get('/api/photo/defaultphoto');

router.put('/api/users/follow', authMiddleware.verifyToken, userCtrl.addFollowing, userCtrl.addFollower);

router.route('/api/users/:userId').get(authMiddleware.verifyToken, userCtrl.getUserByID);
router.route('/api/users/:userId').put(authMiddleware.verifyToken, userCtrl.updateUser);
router.route('/api/users/:userId').delete(authMiddleware.verifyToken, userCtrl.deleteUser);

module.exports = router;