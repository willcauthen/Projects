var mongoose = require('mongoose');

var schema = mongoose.Schema;

var WallSchema = new schema ({
	color: String,
	post: String
});

var Wall = mongoose.model ('Wall', WallSchema);
module.exports = Wall;