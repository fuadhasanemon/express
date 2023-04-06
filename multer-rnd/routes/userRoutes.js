const express = require("express");
const path = require("path");
const {
  showUserForms,
  storeUserData,
} = require("../controllers/userController");
const multer = require("multer");

// Routes init
const router = express.Router();

// Multer setup
const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/users/"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const userMulter = multer({
  storage: userStorage,
}).single("photo");

// Routs
router.get("/", showUserForms);
router.post("/", userMulter, storeUserData);

// export
module.exports = router;
