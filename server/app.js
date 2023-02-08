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
// importing user context
import User, { findOne } from "./models/user.js";

// twilio auth
import twilio from "twilio";
import bodyParser from "body-parser";
import MessagingResponse from "twilio/lib/twiml/MessagingResponse.js";

import twilioConfig from "./twilioAuth/twilio.env.js";
const accountSid = twilioConfig.accountSid;
const authToken = twilioConfig.authToken;

const twilioClient = twilio(accountSid, authToken);


app.get("/loginTwilio", (req, res) => {
	// request phone number and channel will be sms for default
	let { number, channel } = req.query;
	number = "+92" + number.slice(1);
	console.log(req.query);
	twilioClient.verify.v2
		.services(twilioConfig.serviceId)
		.verifications.create({
			to: number,
			channel: channel || "sms",
		})
		.then((data) => {
      console.log("Login")
      console.log(data);
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send({ err: err.message });
		});
});

app.get("/verifyTwilio", (req, res) => {
	// request phone number and code
	let { number, code } = req.query;
	number = "+92" + number.slice(1);
	twilioClient.verify.v2
		.services(twilioConfig.serviceId)
		.verificationChecks.create({
			to: number,
			code: code,
		})
		.then((data) => {
      console.log("verify")
      console.log(data);
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send({ err: err.message });
		});
});

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
			const oldUser = await findOne({ email });

			if (oldUser) {
				return res.status(409).send("User Already Exist. Please Login");
			}

			//Encrypt user password
			encryptedPassword = await hash(password, 10);
			// Create user in our database

			const user = new User({
				first_name,
				last_name,
				email: email.toLowerCase(), // sanitize: convert email to lowercase
				password: encryptedPassword,
				role: role,
				token: "token",
			});
			const token = sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
				expiresIn: "2h",
			});
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
		const user = await findOne({ email: email.toLowerCase() });

		if (user && compare(password, user.password)) {
			// Create token

			const token = sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
				expiresIn: "2h",
			});

			user.token = token;

      // save user token
      user.save();


      


const vendor = require("./routes/vendor");
app.post("/becomeVendor/:id", vendor.becomeVendor);
app.post("/addProduct/:id", vendor.addProduct); //ok
app.get("/getStoreProducts/:storeId", vendor.getStoreProduct); //ok
app.get("/searchProduct/:name", vendor.searchProductByName); //ok

export default app;
