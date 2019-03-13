const mongoose = require("mongoose");
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL);
} else {
  mongoose.connect("mongodb://localhost/projectexpress");
}
mongoose.Promise = Promise;

module.exports = mongoose;
