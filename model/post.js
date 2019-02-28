const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ResponseSchema = require("./response");

const PostSchema = new Schema({
  name: String,
  description: String,
  status: {
    type: String
    // want to make this a checkmark in a box if I can
  },
  priority: {
    type: Number,
    min: 0,
    max: 5
  },
  responses: [ResponseSchema]
});

module.exports = PostSchema;
