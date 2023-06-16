const express = require('express');
const authCtrl = require('../controller/auth.controller');

const router = express.Router();

router.post('/api/auth/signin', authCtrl.signin);

module.exports = router;