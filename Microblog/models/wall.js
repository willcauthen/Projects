var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WallSchema = new Schema ({
	post: String
});

var Post = mongoose.model('Post', WallSchema);
module.exports = Post;