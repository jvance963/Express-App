const mongoose = require("../db/connection");

var ResponseSchema = new mongoose.Schema(
  {
    responder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    content: String,
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Response", ResponseSchema);
