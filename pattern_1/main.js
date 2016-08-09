var express = require('express');
var routes = require('./routes/index');
var app = express();

// view engine setup
app.use('/public', express.static(__dirname + '/public')); // Folder Access
app.engine('html', require('ejs').renderFile); // render HTML Files

// Template
app.use('/', routes)
module.exports = app;