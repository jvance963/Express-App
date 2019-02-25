const express = require("express");
const router = express.Router();

router.get("/post", function(req, res) {
  res.send({ type: "GET" });
});

router.post("/post", function(req, res) {
  res.send({ type: "POST" });
});

router.put("/post/:id", function(req, res) {
  res.send({ type: "PUT" });
});

router.delete("/post/:id", function(req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
