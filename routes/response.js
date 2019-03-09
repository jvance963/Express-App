const express = require("express");
const router = express.Router();
const responseController = require("../controllers/response");

router.get("/:id", responseController.show);
router.get("/:id", responseController.create);

module.exports = router;
