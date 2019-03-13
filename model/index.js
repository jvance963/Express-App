const mongoose = require("../db/connection.js");

module.exports = {
  Post: mongoose.model("post", require("./post")),
  Response: mongoose.model("response", require("./response"))
};
