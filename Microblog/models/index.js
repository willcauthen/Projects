
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/4000");

module.exports.Wall = require("./wall.js");