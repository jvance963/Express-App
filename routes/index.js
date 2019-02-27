const express = require("express");
const router = express.Router();
const { Post } = require("../models/post");

router.get("/", function(req, res) {
  Post.find({})
    .sort({ priority: "asc" })
    .then(items => {
      res.render("post", { items, success: req.flash("success") });
    });
});

router.use("/post", require("./post.js"));

module.exports = router;
