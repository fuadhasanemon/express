const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const student = require("./routes/student");
const expressLayouts = require("express-ejs-layouts");
// const bodyParser = require("body-parser");

// environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// express init
const app = express();

// data manage
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

// EJS init
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/app");

// Static folder
app.use(express.static("public"));

// init router
app.use("/student", student);

// server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
