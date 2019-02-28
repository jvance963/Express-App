const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/projectexpress");
mongoose.Promise = Promise;

module.exports = mongoose;
