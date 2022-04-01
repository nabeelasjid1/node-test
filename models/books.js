const mongoose = require("mongoose");
const { mongo, Schema } = mongoose;

const schema = new Schema({
  name: String,
});
const Books = mongoose.model("books", schema);

module.exports = Books;
