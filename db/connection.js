const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Express-Project");
mongoose.Promise = Promise;

module.exports = mongoose;
