const express = require("express");
const router = express.Router();
const responseController = require("../controllers/post");

router.get("/", responseController.index);
router.get("/new", responseController.new);
router.post("/", responseController.create);
router.get("/:id", responseController.show);

module.exports = router;
