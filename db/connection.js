const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Project-Express");
mongoose.Promise = Promise;

module.exports = mongoose;
