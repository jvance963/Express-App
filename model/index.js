const mongoose = require("../db/connection");

module.exports = {
  Response: mongoose.model("response", require("./item")),
  Post: mongoose.model("Post", require("./Post"))
};
