/**
 * Express configuration
 */

'use strict';

var express = require('express');
var apiRoutes = express.Router();

module.exports = function(app) {
    app.use(apiRoutes);
};