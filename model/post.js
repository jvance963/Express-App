const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Response = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,

    // will have to make a model for jobber if I use this
    ref: "Jobber"
  }
});

const PostSchema = new Schema({
  name: String,
  description: String,
  status: {
    type: String,
    // want to make this a checkmark in a box if I can
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
  response: [Response]
});

module.exports = PostSchema;

//trying to make this go back to the post page as a comment
module.exports = Response;
