var express = require('express');
var app = express();

// load db.js
// var db = require('./db');

// load the routes/controller(s)  
var routes = require('./controller');

// register routes/controller(s)
app.use('/api', routes);

module.exports = app;