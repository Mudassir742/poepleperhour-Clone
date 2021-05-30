const express = require("express");
const router = express.Router();
const jsFile = require("../Data/Data.json");

router.get("/api/data", (req, res) => {
  res.status(200).send(jsFile.Data);
});

module.exports = router;
