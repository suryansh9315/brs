const express = require("express");
const dotenv = require("dotenv").config();
const { sign_jwt } = require("../../utils/jwt_helpers");
const { verifyToken } = require("../../middlewares/auth");
const { ObjectId } = require("mongodb");
const { mongoClient } = require("../../database");

const db = mongoClient.db("brs");
const users = db.collection("users");
const app = express.Router();

app.post("/recommend", verifyToken, async (req, res) => {
  const bookName = req.body.bookName;
  try {
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = app;
