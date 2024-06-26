const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  res.end("Hello from the server...!!!!");
});

myServer.listen(8000, () => {
  console.log("Server is listning on Port: 8000");
});
