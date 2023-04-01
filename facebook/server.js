const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// express init
const app = express();

// data manage
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
