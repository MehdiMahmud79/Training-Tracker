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

MONGODB_URI = `mongodb+srv://${process.env.db_userName},:${process.env.db_password}@cluster0.gjyrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// create db connection to MongoDb
mongoose.connect(MONGODB_URI || "mongodb://localhost/workoutDb", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
