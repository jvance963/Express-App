const mongoose = require("../db/connection");

module.exports = {
  Response: mongoose.model("Item", require("./item")),
  newPost: mongoose.model("User", require("./user"))
};
