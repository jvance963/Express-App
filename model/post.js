const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  response: String,
  availability: {
    type: Date,
    default: Date.now(),
    createdAt: {
      type: Date,
      default: Date.now(),
      complete: String
    }
  }
});

const PostSchema = new Schema({
  name: String,
  description: String,
  status: {
    type: String
  },
  priority: {
    type: String
  },
  responses: [ResponseSchema]
});

module.exports = PostSchema;
