const express = require("express");
const app = express();
const setupDatabase = require("./config/database");
const books = require("./models/books");
app.use(express.json());
setupDatabase();

app.get("/get-books", async (req, res) => {
  const data = await books.find();
  res.send({
    message: "success",
    data,
  });
});

app.post("/create-book", async (req, res) => {
  try {
    console.log("req", req.body);

    const data = await books.create(req.body);

    res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    res.status(500).send({
      message: "error",
      error,
    });
  }
});

app.listen(3000, () => {
  console.log(`app is listening to port 3000`);
});
