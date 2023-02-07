require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// importing user context
const auth = require("./routes/auth.js");
app.post("/register", auth.signup); // Register
app.post("/login", auth.login); // login

const vendor = require("./routes/vendor");
app.post("/becomeVendor/:id", vendor.becomeVendor);
app.post("/addProduct/:id", vendor.addProduct); //ok
app.get("/getStoreProducts/:storeId", vendor.getStoreProduct); //ok
app.get("/searchProduct/:name", vendor.searchProductByName); //ok
app.get("/updateProduct/:product_id", vendor.updateProduct);

module.exports = app;
