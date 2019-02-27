const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/handy-jobs", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;
