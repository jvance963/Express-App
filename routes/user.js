const express = require("express");
const router = express.Router();
const user = require("../controllers/user.js");

router.get("/user/:id", user.getUser);

router.post("/user", user.createUser);

router.put("/user/:id", user.updateUser);

router.delete("/user/:id", user.deleteUser);

module.exports = router;
