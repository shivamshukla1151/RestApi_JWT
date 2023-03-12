const express = require("express");
const { APP_PORT } = require("./config");
const routes = require("./routes");
const createError = require("http-errors");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
require("./helpers/mongodbConnection");
// const bodyParser = require("body-parser");

app.use(express.json());
// app.use(urlencoded({ extended: true }));
app.use("/auth", routes);

app.use(async (req, res, next) => {
  next(createError.NotFound("this is the notfound message"));
});
app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`LISTING TO PORT: http://localhost:${APP_PORT}`);
});
