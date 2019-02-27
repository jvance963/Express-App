const express = require("express");
const router = express.Router();
const user = require("../controllers/user.js");

router.get("/login", user.login);
router.post("/login", user.createLogin);
router.get("/sign-up", user.signUp);
router.post("/sign-up", user.createSignUp);
router.get("/logout", user.logout);
router.get("/:id", user.show);

module.exports = router;
