const express = require("express");
const path = require("path");
const {
  showAllStudents,
  createStudents,
  singleStudent,
  editStudent,
  updateStudent,
  deleteStudent,
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
// Create and store student data
router.get("/", showAllStudents);
router.get("/create", createStudents);
router.post("/create", studentPhotoMulter, studentDataStore);

// Edit and update student data
router.get("/:id", singleStudent);
router.get("/edit/:id", editStudent);
router.post("/update/:id", studentPhotoMulter, updateStudent);

// Delete student data
router.get("/delete/:id", deleteStudent);

// export
module.exports = router;
