const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const router = require("./Controllers");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const app = express();

app.use(logger("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create db connection to MongoDb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDb", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
