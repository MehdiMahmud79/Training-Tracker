const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.redirect("/index.html");
});

router.get("/exercise", (req, res) => {
  res.redirect("/exercise.html");
});

router.get("/stats", (req, res) => {
  res.redirect("/stats.html");
});

module.exports = router;
