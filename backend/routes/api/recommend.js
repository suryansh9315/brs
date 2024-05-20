const express = require("express");
const dotenv = require("dotenv").config();
const { sign_jwt } = require("../../utils/jwt_helpers");
const { verifyToken } = require("../../middlewares/auth");
const { ObjectId } = require("mongodb");
const { mongoClient } = require("../../database");

const db = mongoClient.db("brs");
const users = db.collection("users");
const app = express.Router();

app.post("/getRecommendations", verifyToken, async (req, res) => {
  const bookName = req.body.bookName;
  try {
    const response = await fetch(
      "https://brs-9koe.onrender.com/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookName,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      return res.status(200).json({ message: "success", result: data.recommendations, number: data.number })
    }
    return res.status(200).json({ message: "Something went wrong" })
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = app;
