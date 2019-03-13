const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  postId: String,
  response: String,
  availability: String
});

module.exports = ResponseSchema;
