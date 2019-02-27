const mongoose = require("../db/connection");

PostingSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    createdAt: {
      type: Date,
      default: Date.now()
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    responses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response"
      }
    ],
    closed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posting", PostingSchema);
