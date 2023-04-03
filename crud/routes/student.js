const express = require("express");
const path = require("path");
const { showAllStudents, createStudents, singleStudent, editStudent } = require("../controllers/studentController");

// Routes init
const router = express.Router();

// Routing
router.get("/", showAllStudents);
router.get("/:id", singleStudent);
router.get("/create", createStudents);
router.get("/edit/:id", editStudent);

// export
module.exports = router;
