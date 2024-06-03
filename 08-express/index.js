const http = require("http");
const express = require("express");

const app = express(); //basically a handler function

app.get("/", (req, res) => {
  return res.send("Hello from homePage");
});

app.get("/about", (req, res) => {
  return res.send("From About");
});

const myServer = http.createServer(app);

app.listen(8000, () => {
  console.log("Server Started");
});
