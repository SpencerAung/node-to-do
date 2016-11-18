var express = require("express");
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var port = process.env.PORT || 3000;

<<<<<<< HEAD



app.use('/assets/', app.static(__dirname + '/public'));
=======
app.use('/assets/', express.static(__dirname + '/public'));
>>>>>>> initial-setup

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send('Hello');
});

mongoose.connect(config.getDbConnectionString());
app.listen(port);