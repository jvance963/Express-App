const express = require("express");
const router = express.Router();
const responseController = require("../controllers/response");

router.get("/:id", responseController.show);

module.exports = router;
