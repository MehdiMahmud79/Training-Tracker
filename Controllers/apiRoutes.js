const router = require("express").Router();
const { Workout } = require("../Models");

router.get(`/`, async (req, res) => {
  try {
    const dbWorkouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
      .sort({ day: 1 })
    res.status(200).json(dbWorkouts);
  } catch (error) {
    res.status(400).json(error);
  }
});


router.post("/", async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.status(200).json(newWorkout);
  } catch (error) {
    res.json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newExercise = await Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { exercises: req.body },
      },
      { new: true }
    );
    res.status(200).json(newExercise);
  } catch (error) {
    res.json(error);
  }
});

router.get(`/range`, async (req, res) => {
  try {
    const dbWorkouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalWeight: { $sum: "$exercises.weight" },
        },
      },
    ])
      .sort({ day: -1 })
      .limit(7);
    res.status(200).json(dbWorkouts);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
