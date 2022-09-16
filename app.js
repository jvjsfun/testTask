const express = require("express");
const app = express();
const port = 3000;
var jsonData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/data", (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
