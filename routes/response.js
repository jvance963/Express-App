const express = require("express");
const router = express.Router();
const response = require("../controllers/response.js");

router.get("/response/:id", response.getResponse);

router.post("/response", response.createResponse);

router.put("/response/:id", response.updateResponse);

router.delete("/response/:id", response.deleteResponse);

module.exports = router;
