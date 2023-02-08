const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.signup = async function (req, res) {
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
};

module.exports.login = async function (req, res) {
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
};
