const express = require("express");
const dotenv = require("dotenv").config();
const { sign_jwt } = require("../../utils/jwt_helpers");
const { verifyToken } = require("../../middlewares/auth");
const { ObjectId } = require("mongodb");
const { mongoClient } = require("../../database");
const { verifyGoogleToken } = require("../../utils/google");

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
          .json({ message: "Successfully logged in", token, user });
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
  if (!req.body.email || !req.body.password || !req.body.username) {
    return res.status(400).json({ message: "Missing fields to register." });
  }
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  try {
    const query = { email };
    const user = await users.findOne(query);
    if (!user) {
      const user_object = {
        email,
        password,
        username,
        created_at: Date.now(),
        updated_at: "",
        verified: false,
        mode: 'email'
      };
      const new_user = await users.insertOne(user_object);
      return res.status(200).json({ message: "Successfully Created New User" });
    } else {
      return res.status(400).json({ message: "User Already Exists" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
});

app.post("/check-token", verifyToken, async (req, res) => {
  const query = { _id: new ObjectId(req.userId) };
  const user = await users.findOne(query);
  if (user) {
    return res.status(200).json({ message: "Correct Token", user });
  }
  res.status(400).json({ message: "User D.N.E" });
});

app.post("/google-login", async (req, res) => {
  try {
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);
      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
      }
      const profile = verificationResponse?.payload;
      const query = { email: profile.email };
      const user = await users.findOne(query);
      if (!user) {
        return res.status(400).json({
          message: "You are not registered. Please sign up",
        });
      }
      res.status(200).json({
        message: "Login was successful",
        user: {
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          picture: profile?.picture,
          email: profile?.email,
          token: sign_jwt({ id: user._id }),
          // token: jwt.sign({ email: profile?.email }, process.env.JWT_SECRET, {
          //   expiresIn: "1d",
          // }),
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error?.message || error,
    });
  }
});

app.post("/google-register", async (req, res) => {
  try {
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);
      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
      }
      const profile = verificationResponse?.payload;
      const query = { email: profile.email };
      const user = await users.findOne(query);
      if (user) {
        return res.status(400).json({
          message: "You are already registered. Please login",
        });
      }
      const user_object = {
        email: profile?.email,
        username: profile?.given_name,
        picture: profile?.picture,
        created_at: Date.now(),
        updated_at: "",
        verified: true,
        mode: 'google'
      };
      const new_user = await users.insertOne(user_object);
      res.status(200).json({
        message: "Signup was successful",
        user: {
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          picture: profile?.picture,
          email: profile?.email,
          token: sign_jwt({ id: new_user.insertedId }),
          // token: jwt.sign({ email: profile?.email }, process.env.JWT_SECRET, {
          //   expiresIn: "1d",
          // }),
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error?.message || error,
    });
  }
});

module.exports = app;
