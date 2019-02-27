const express = require("express");
const router = express.Router();
const { Post } = require("../model/post");

router.get("/", function(req, res) {
  Post.find({})
    .sort({ priority: "asc" })
    .then(post => {
      res.render("post", { post, success: req.flash("success") });
    });
});

router.use("/post", require("./post.js"));

module.exports = router;
