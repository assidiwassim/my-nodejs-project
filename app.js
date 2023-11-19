const express = require('express')
const mongoose = require("mongoose");
const app = express()
const Item = require("./models/Item");
require('dotenv').config()

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect("mongodb://mongodb-service:27017/my-db", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('My app v1')
})

app.get("/items", (req, res) => {
  Item.find()
    .then((items) => res.send({ items }))
    .catch((err) => res.status(500).json({ err }));
});

app.post("/items/add", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem
    .save()
    .then((item) => res.send({ message: "item saved successfully", item }))
    .catch((err) => res.status(500).json({ err }));
});

const port = process.env.PORT

app.listen(port, () => {
  console.log(`listening on port ${port} : hedha log `)
})