//Server side JS

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');

// config codes
app.set ('view engine', 'ejs');

//express.static: app.use(express: static('public'));

app.use("/static", express.static("public"));


app.get('/', function(request, response) {
	response.render('index');
});



app.get('/', function(request, response) {
	response.render('styles');
});

app.get('/', function(request, response) {
	response.send('It is working');
});

app.listen(4000, function(request, response) {
	console.log("Listening at localhost:4000");
});