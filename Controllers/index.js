const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api/workouts", apiRoutes);

module.exports = router;
