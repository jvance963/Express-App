const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  response: String,
  availability: String
});

const PostSchema = new Schema({
  name: String,
  description: String,
  status: {
    type: String
  },
  priority: {
    type: String,
    instructions: String
  },
  responses: [ResponseSchema]
});

module.exports = PostSchema;
