require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();

const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// importing user context
const auth = require("./routes/auth.js");
// Register
app.post("/register", auth.signup);
// Login
app.post("/login", auth.login);

app.post("/becomeVendor/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("User id is required");
  }
  const storeAlreadyExist = await Store.findOne({ owner_id: req.params.id }); // check if store already exist
  console.log(storeAlreadyExist);
  if (storeAlreadyExist) {
    return res.status(409).send("Store Already Exist");
  }
  const store = new Store({
    store_name: req.body.store_name,
    adress: req.body.adress,
    phone: req.body.phone,
    products: [
      new Product({
        name: "awaos",
        description: "awos",
        price: 12,
        rating: 12,
      }),
    ], // create a product
    owner_id: req.params.id,
  });
  User.findByIdAndUpdate(
    (c) => {
      c.id == req.params.id;
    },
    { role: "vendor" }
  );
  store
    .save()
    .then((item) => {
      return res.status(200).json(item);
    })
    .catch((err) => {
      return res.status(400).send("Unable to save to database");
    });
});

app.post("/addProduct/:id", async (req, res) => {
  const storeId = mongoose.Types.ObjectId(req.params.id);
  var current_store = await Store.findOne({ _id: storeId });
  if (current_store) {
    const product_name = req.body.product_name;
    const description = req.body.description;
    const price = req.body.price;
    const rating = 0;
    const product = new Product({
      name: product_name,
      description,
      price,
      rating,
      storeId,
    });
    current_store.update({ $push: { products: product } });
    product
      .save()
      .then((item) => {
        return res.status(200).json(item);
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } else {
    return res.status(400).send("Please store register first");
  }
});

app.get("/getStoreProducts/:storeId", async (req, res) => {
  const storeid = mongoose.Types.ObjectId(req.params.storeId);
  const allProducts = await Product.find({ storeId: storeid });
  if (allProducts.length > 0) {
    return res.status(200).send(allProducts);
  } else {
    return res.status(400).send({ msg: "No Product found in store" });
  }
});

app.get("/searchProduct/:name", async (req, res) => {
  const productname = req.params.name;
  const result = await Product.find({ name: { $regex: productname } });
  if (result.length > 0) {
    return res.status(200).send(result);
  } else {
    return res.status(400).send({ msg: "No Product Found" });
  }
});

module.exports = app;
