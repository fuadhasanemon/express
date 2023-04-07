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

      if(req.files.user_photo){
        if (
          file.mimetype == "image/jpeg" ||
          file.mimetype == "image/jpg" ||
          file.mimetype == "image/png" ||
          file.mimetype == "image/webp" ||
          file.mimetype == "image/pdf"
        ) {
          cb(null, path.join(__dirname, "../public/images/users/"));
        } else {
          console.log("Inavald photo format");
        }
      }
      if(req.files.user_cv){
        if(file.mimetype == "application/pdf"){
          cb(null, path.join(__dirname, "../public/cv/"));
        } else {
          console.log("Inavald cv format");
        }
        
      }

  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + Math.floor(Math.random() * 100) + "_" + file.originalname);
  },
});

// Multer middleware
const userMulter = multer({
  storage: userStorage,
}).fields([
  {
    name : "user_photo",
  },
  {
    name : "user_cv",
  }
]);

// Routs
router.get("/", showUserForms);
router.post("/", userMulter, storeUserData);

// export
module.exports = router;
