const fs = require("fs");

/*

fs.writeFileSync(
  "./sync.txt",
  "Created the file and insterted this text via fs.writeFile Sync function"
); // this is a sync call

fs.writeFile(
  "./async.txt",
  "Created the file and insterted this text via fs.writeFile Async function",
  (err) => {}
); // Async

*/

fs.readFile("async.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous file read
const data = fs.readFileSync("sync.txt", "utf8");
console.log(data);
