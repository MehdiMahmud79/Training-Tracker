const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const router = require("./Controllers");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// create db connection to MongoDb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
