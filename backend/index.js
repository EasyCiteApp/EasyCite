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
app.use(ErrorController);

// Router
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all("*", (req, res, next) => {
  next(new AppError(`URL ${req.originalUrl} does not exist`, 404));
});

// Starting
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});