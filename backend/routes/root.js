const express = require("express");
const auth = require("./api/auth");
const recommend = require("./api/recommend");

const app = express.Router();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to BRS API" })
})

app.use("/api/auth", auth);
app.use("/api/recommend", recommend);

module.exports = app;