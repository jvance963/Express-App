const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Response = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Jobber"
  }
});

module.exports = Response;
