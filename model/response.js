const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = ResponseSchema;
