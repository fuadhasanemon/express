const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const userRout = require("./routes/userRoutes");

// environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// express init
const app = express();

// data manage
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// EJS init
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/app");

// Static folder
app.use(express.static("public"));

// init router
app.use("/", userRout);

// server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
