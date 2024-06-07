const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Product = require("./models/product.model");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://dbUser:pqs2WUSVGb4VPcxx@nodebackenddb.1uxcji5.mongodb.net/?retryWrites=true&w=majority&appName=NodeBackendDB"
  )
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
