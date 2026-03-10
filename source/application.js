const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Node CI Pipeline Active"
  });
});

module.exports = app;