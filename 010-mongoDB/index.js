var mongo = require("mongodb");

var MongoClient = mongo.MongoClient;
var url = process.env.MONGODB;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
