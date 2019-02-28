const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const PostSchema = new Schema({
  name: String,
  description: String,
  status: {
    type: String,
    enum: ["Complete", "Incomplete"]
  },
  priority: {
    type: Number,
    min: 0,
    max: 5
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [Comment]
});

module.exports = PostSchema;
