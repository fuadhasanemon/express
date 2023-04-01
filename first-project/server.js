const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");

// environment variable
dotenv.config();
const PORT = process.env.PORT || 4000;

// express init
const app = express();

// Static
app.use("/public", express.static("public"));

// routing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "public/team.html"));
});

app.get("/blog", (req, res) => {
  res.send("Blog page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.listen(5050, (res, req) => {
  console.log(`Server is runnig on ${PORT}`.bgMagenta.black);
});
