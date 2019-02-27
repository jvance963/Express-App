const express = require("express");
const router = express.Router();

router.use(require("./postings"));
router.use("/user", require("./user"));
router.use("/response", require("./response"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
