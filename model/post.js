const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  }
});

module.exports = PostSchema;
