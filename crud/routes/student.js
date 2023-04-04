const express = require("express");
const path = require("path");
const {
  showAllStudents,
  createStudents,
  singleStudent,
  editStudent,
  studentDataStore,
} = require("../controllers/studentController");
const multer = require("multer");

// Routes init
const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/students/"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// // Photo upload using multer
const studentPhotoMulter = multer({
  storage: storage,
}).single("student_photo");

// Routing
router.get("/", showAllStudents);
router.get("/create", createStudents);
router.post("/create", studentPhotoMulter, studentDataStore);
router.get("/:id", singleStudent);
router.get("/edit/:id", editStudent);

// export
module.exports = router;
