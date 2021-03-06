const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const setupDatabase = () => {
  if (
    mongoose.connection.readyState !== 1 ||
    mongoose.connection.readyState !== 2
  ) {
    mongoose
      .connect("mongodb://localhost:27017/test-nodejs", options)
      .then(() => {
        console.info("INFO - MongoDB Database connected.");
      })
      .catch((err) =>
        console.log("ERROR - Unable to connect to the database:", err)
      );
  }
};

module.exports = setupDatabase;
