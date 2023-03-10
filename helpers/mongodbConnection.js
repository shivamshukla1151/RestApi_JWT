const mongoose = require("mongoose");
const { DB_URL } = require("../config");

const connectionParam = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(DB_URL, connectionParam)
  .then(() => {
    console.info("Connected to your Mongodb Atlas Database buddy...!!!");
  })
  .catch((err) => {
    console.log("Error in database :" + err);
  });
