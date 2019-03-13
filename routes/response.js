const express = require("express");
const router = express.Router();
const responseController = require("../controllers/response");

router.get("/:id", responseController.show);
router.post("/", responseController.create);

module.exports = router;
