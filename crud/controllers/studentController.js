const { json } = require("express");
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");
// const { proppatch } = require("../routes/student");

// Show all students [index file]
const showAllStudents = (req, res) => {
  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  res.render("students/index", {
    students,
  });
};

// Create student
const createStudents = (req, res) => {
  res.render("students/create");
};

// create student from create form and save it to json db
const studentDataStore = (req, res) => {
  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

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

// Show single student
const singleStudent = (req, res) => {
  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  const { id } = req.params;
  const student = students.find((data) => data.id == id);
  res.render("students/show", {
    student,
  });
};

// Edit student
const editStudent = (req, res) => {
  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  const { id } = req.params;
  const editStudent = students.find((data) => data.id == id);
  res.render("students/edit", {
    editStudent,
  });
};

// Update student data
const updateStudent = (req, res) => {
  const { id } = req.params;

  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  const studentIdIndex = students.findIndex((data) => data.id == id);

  students[studentIdIndex] = {
    ...students[studentIdIndex],
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
  };

  // now write data to json db
  writeFileSync(
    path.join(__dirname, "../db/student.json"),
    JSON.stringify(students)
  );
  res.redirect("/student");
};

// delete student
const deleteStudent = (req, res) => {
  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  const { id } = req.params;

  const newStudentData = students.filter((data) => data.id != id);
  // now write data to json db
  writeFileSync(
    path.join(__dirname, "../db/student.json"),
    JSON.stringify(newStudentData)
  );

  res.redirect("/student");
};

module.exports = {
  showAllStudents,
  createStudents,
  singleStudent,
  editStudent,
  updateStudent,
  studentDataStore,
  deleteStudent,
};
