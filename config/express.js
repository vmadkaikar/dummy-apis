/**
 * Express configuration
 */

'use strict';

var express = require('express');
var apiRoutes = express.Router();

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(apiRoutes);
};