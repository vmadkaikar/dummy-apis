'use strict';

var express = require('express');
var controller = require('./data.controller');

var router = express.Router();

router.get('/', controller.getData);
router.get('/:count', controller.getData);

module.exports = router;
