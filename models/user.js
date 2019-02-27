var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
      index: true
    },
    password: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
      index: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
