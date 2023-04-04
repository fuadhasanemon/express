const { json } = require("express");
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");
// const { proppatch } = require("../routes/student");

const students = JSON.parse(
  readFileSync(path.join(__dirname, "../db/student.json"))
);

const showAllStudents = (req, res) => {
  res.render("students/index", {
    students,
  });
};

const createStudents = (req, res) => {
  res.render("students/create");
};

// Show single student
const singleStudent = (req, res) => {
  const { id } = req.params;
  const student = students.find((data) => data.id == id);
  res.render("students/show", {
    student,
  });
};

const editStudent = (req, res) => {
  res.render("students/edit");
};

// create student from create form
const studentDataStore = (req, res) => {
  const { name, email, phone, location, photo } = req.body;

  console.log(req.body);

  let last_id = 1;

  if (students.length > 0) {
    last_id = students[students.length - 1].id + 1;
  }

  students.push({
    id: last_id,
    name: name,
    email: email,
    phone: phone,
    location: location,
    photo: req.file ? req.file.filename : "avatar.jpg",
  });

  // now write data to json db
  writeFileSync(
    path.join(__dirname, "../db/student.json"),
    JSON.stringify(students)
  );

  res.redirect("/student");
};

module.exports = {
  showAllStudents,
  createStudents,
  singleStudent,
  editStudent,
  studentDataStore,
};
