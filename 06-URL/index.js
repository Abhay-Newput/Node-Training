const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New Req recieved \n`;
  const myURL = url.parse(req.url, true);
  console.log(myURL);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myURL.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myURL.query.name;
        res.end(`I'm a Dev ${username}`);
        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("Server listning at PORT: 8000"));
