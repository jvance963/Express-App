const express = require("express");
const router = express.Router();
const postings = require("../controllers/postings.js");

router.get("/postings/:id", postings.getPostings);

router.post("/postings", postings.createPostings);

router.put("/postings/:id", postings.editPostings);

router.delete("/postings/:id", postings.deletePostings);

module.exports = router;
