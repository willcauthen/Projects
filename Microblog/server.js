//Server side JS

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// config codes
app.set ('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use("/static", express.static("public"));
var posts = [
{ body : 'FUCK POLICE SONNYBOI'},
{ body: 'GOOD DAMN TINY'},
{ body: 'SEE ANIMAL KINGKRON'},
{ body: 'BAD WOLF GIOVANNI'},
{ body: 'FUCK TIME MARRRTY'}];



// app.get('/', function(request, response) {
// 	db.Post.find().exec(function(err, posts) {
// 		if(err) { console.log("You done fucked up" + err); }
// 		response.render('index', {posts: posts});
// 	});
// });

app.get("/api/posts", function (request, response){
 // get posts from db
 db.Post.find(function(err, posts){
    res.send(posts);
  });
});

// api route to create new food
app.post("/api/posts", function (request, response){
  var newPost = request.body;
   console.log(newPost);
    

     db.Post.create(newPost, function(err, post){
    if (err) { return console.log("create error: " + err); }
    console.log("created ", post.body);
    res.json(post);
    // process.exit();
	});
});


mongoose.connect('mongodb://localhost/Microblog/');
var Posts = require('./models/wall.js');

//Wall index
app.get('/', function(request, response) {
	response.render('index', { Posts : Posts });
});

//Wall show
app.get('/Posts/:id', function(request, response) {
	var Posts = Posts[request.params.id];
	response.render('Posts-show', { Wall : Wall});
});

//Wall create
app.post('/Posts', function(request, response) {
	var Posts = request.body;
	Posts.push(Posts);
	//Wall.create(wall, function( error, wall){
		response.status(200).json(Posts);
	//});


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