const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const AppError = require("./util/appError");
const ErrorController = require("./controller/errorController");

// Server
const app = express();

// Mongo
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to Database!"))
  .catch((e) => console.log(e));

// Setup Server
app.use(cors());
app.use(express.json());

app.all("*", (req, res, next) => {
  next(new AppError(`URL ${req.originalUrl} does not exist`, 404));
});

app.use(ErrorController);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});