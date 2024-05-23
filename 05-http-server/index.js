const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req recieved \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("I'm a Dev");
        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("Server listning at PORT: 8000"));
