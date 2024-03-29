const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../Models/userModel");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).send({ error: "User already registered in Database" });
    } else {
      bcrypt.hash(password, +process.env.SALT, async function (err, hash) {
        if (err) {
          res
            .status(401)
            .send({ message: "Server Error happens", error: err.message });
          console.log(err);
        } else {
          let newUser = new User({
            name,
            email,
            password: hash,
          });
          await newUser.save();
          res.status(200).send({ message: "User Registered now", newUser });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    console.log("user==", user);
    if (!user) {
      res
        .status(400)
        .send({ error: "User not found here, please register", OK: false });
    } else {
      let name = user.name;
      bcrypt.compare(password, user.password, async function (err, result) {
        if (result) {
          var token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY);
          res.status(200).send({
            message: "User is Logged In",
            token,
            user,
            name: name,
            OK: true,
          });
        } else {
          res.status(401).send({
            error: "You have Inter Incorrect Credentials, Kindly Login Again",
            OK: false,
          });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
    console.log(error);
  }
});

module.exports = {
  userRouter,
};
