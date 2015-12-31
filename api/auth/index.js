'use strict';

var express = require('express');
var controller = require('./auth.controller');

var router = express.Router();

router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/userInfo', controller.getUserInfo);

module.exports = router;
