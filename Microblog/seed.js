// SEED.JS
var db = require('./models');

var Wall = [
{   color: 1, 
	graffiti: 'FUCK POLICE SONNYBOI'}, 
{	color: 3, 
	graffiti: 'GOOD DAMN TINY'}, 
{	color: 1, 
	graffiti: 'SEE ANIMAL KINGKRON'}, 
{	color: 4, 
	graffiti: 'BAD WOLF GIOVANNI'}, 
{	color: 2,  
	graffiti: 'FUCK TIME MARRRTY'}];

db.Wall.create(Wall, function(error, post) {
	if(err){
		console.log("Error!1");
	}
	console.log(' posts created' ,  post.length , 'posts');
	process.exit();
});