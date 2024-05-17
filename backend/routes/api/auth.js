const express = require("express");
const dotenv = require("dotenv").config();
const { sign_jwt } = require("../../utils/jwt_helpers");
const { verifyToken } = require("../../middlewares/auth");
const { ObjectId } = require("mongodb");
const { mongoClient } = require("../../database");

const db = mongoClient.db("brs");
const users = db.collection("users");
const app = express.Router();

app.post("/login", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Missing fields for login." });
  }
  const email = req.body.email;
  const password = req.body.password;
  try {
    const query = { email };
    const user = await users.findOne(query);
    if (user) {
      if (user.password === password) {
        const token = sign_jwt({ id: user._id });
        return res
          .status(200)
          .json({ message: "Successfully logged in", token });
      } else {
        return res.status(400).json({ message: "Wrong Password" });
      }
    } else {
      return res.status(400).json({ message: "User D.N.E" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
});

app.post("/register", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Missing fields for login." });
  }
  const email = req.body.email;
  const password = req.body.password;
  try {
    const query = { email };
    const user = await users.findOne(query);
    if (!user) {
      const user_object = {
        email: email,
        password: password,
        created_at: Date.now(),
        updated_at: "",
        verified: false,
      };
      const new_user = await users.insertOne(user_object);
      return res
      .status(200)
      .json({ message: "Successfully Created New User" });
    } else {
      return res.status(400).json({ message: "User Already Exists" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
});

app.post("/check-token", verifyToken, async (req, res) => {
  res.status(200).json({ message: "Correct Token" });
});

module.exports = app;
