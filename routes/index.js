const express = require("express");
const router = express.Router();
const { Post } = require("../model/index");

// router.get("/", function(req, res) {
//   Post.find({})
//     .sort({ priority: "asc" })
//     .then(post => {
//       res.render("index", { post });
//     });
// });

router.use("/post", require("./post.js"));
// router.use("/response", require("./response.js"));

module.exports = router;
