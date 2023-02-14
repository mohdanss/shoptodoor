import dotenv from "dotenv";
dotenv.config();
import database from "./config/database.js";
database();

import express, { json, urlencoded } from "express";
import { hash, compare } from "bcrypt";
const app = express();
import jwt from "jsonwebtoken";
const sign = jwt.sign;
app.use(json());
app.use(urlencoded({ extended: true }));

// twilio auth

import { login, loginTwilio, register, verifyTwilio } from "./routes/auth.js";
app.get("/api/auth/requestOTP", loginTwilio);
app.get("/verifyTwilio", verifyTwilio);
// Register
app.post("/register", register);

// Login
app.post("/login", login);

import {
  becomeVendor,
  addProduct,
  getStoreProduct,
  searchProductByName,
  updateProduct,
} from "./routes/vendor.js";
app.post("/becomeVendor/:id", becomeVendor);
app.post("/addProduct/:id", addProduct); //ok
app.get("/getStoreProducts/:storeId", getStoreProduct); //ok
app.get("/searchProduct/:product_name", searchProductByName); //ok
app.get("/updateProduct/:product_id", updateProduct);

export default app;
