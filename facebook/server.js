const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const expressLayouts = require("express-ejs-layouts");

// environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// express init
const app = express();

// data manage
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// EJS init
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/app");

// Static folder
app.use(express.static("public"));

// init router
app.use(pageRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);

// server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
