var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Load model(s) here
/* eg
    var mongoose = require('mongoose');
    var model = require('./model');
    */
   
//add routes here; '/' has been added  as a default
router.get('/', function (req, res) {

// add functionality
    res.json({message: "API works!"})

});

module.exports = router;