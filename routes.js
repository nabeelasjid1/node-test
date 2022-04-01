const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  return res.status(300).json({
    message: "yes mam",
  });
});

module.exports = {
  router,
};
