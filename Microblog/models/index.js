
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/whateveriwant");

module.exports.Wall = require("./wall.js");