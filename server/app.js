require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// importing user context
const User = require("./models/user");
const Store = require("./models/store");
const Product = require("./models/product");
const { count } = require("./models/product");
// Register
app.post("/register", async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const phone = req.body.phone;

    // Validate user input
    if (!email) {
      return res.status(400).send("Email is required");
    }
    if (!password) {
      return res.status(400).send("Password is required");
    }
    if (!first_name) {
      return res.status(400).send("First name is required");
    }
    if (!last_name) {
      return res.status(400).send("Last name is required");
    }
    if (!role) {
      return res.status(400).send("Role is required");
    }
    if (!phone) {
      return res.status(400).send("Phone is required");
    } else {
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
      // Create user in our database

      const user = new User({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        role: role,
        token: "token",
        phone: phone,
      });
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;

      console.log(user);

      //save user token
      user
        .save()
        .then((item) => {
          return res.status(200).json(item);
        })
        .catch((err) => {
          return res.status(400).send("Unable to save to database");
        });
    }
  } catch (err) {
    console.log(err);
  }
});
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Login
app.post("/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    console.log(email, password);
    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    //Validate if user exist in our database
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      // user
      return res.status(200).json({ user: user, msg: "Login Successful" });
    }
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

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
