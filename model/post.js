const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
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
