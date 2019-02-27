const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/handy-jobs");
mongoose.Promise = Promise;
module.exports = mongoose;
