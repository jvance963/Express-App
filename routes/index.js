const express = require("express");
const router = express.Router();
const { Post } = require("../model/index");

router.use("/post", require("./post.js"));

module.exports = router;
