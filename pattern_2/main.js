var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3000);

// view engine setup
app.use('/public', express.static(__dirname + '/public')); // Folder Access
app.engine('html', require('ejs').renderFile); // render HTML Files

// Templates
var routes = require('./routes/index')(app);

/*------- Server ---------*/
app.listen(port);