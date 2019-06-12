var express = require('express');
var app = express();

// load the routes/controller(s)  
var routes = require('./controller');

// register routes/controller(s)
app.use('/api', routes);

module.exports = app;