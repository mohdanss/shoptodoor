require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// importing user context
const auth = require("./routes/auth.js");
// Register
app.post("/register", auth.signup);
// Login
app.post("/login", auth.login);

const vendor = require("./routes/vendor");
app.post("/becomeVendor/:id", vendor.becomeVendor);
app.post("/addProduct/:id", vendor.addProduct); //ok
app.get("/getStoreProducts/:storeId", vendor.getStoreProduct); //ok
app.get("/searchProduct/:name", vendor.searchProductByName); //ok

module.exports = app;
