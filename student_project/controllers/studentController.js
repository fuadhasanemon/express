const { time } = require("console");
const { json } = require("express");
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");
const veryfiAccountMail = require("../utility/sendMail");

// Show all students [index file]
const showAllStudents = (req, res) => {
  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  const verified = students.filter((data) => data.isVerified == true);

  res.render("students/index", {
    students: verified,
  });
};

// Show all unverified students [index file]
const showAllUnverifiedStudents = (req, res) => {
  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  const unVerified = students.filter((data) => data.isVerified == false);

  res.render("students/unverified", {
    students: unVerified,
  });
};

// Create student
const createStudents = (req, res) => {
  res.render("students/create");
};

// create student from create form and save it to json db
const studentDataStore = async (req, res) => {
  // Read file form student json db
  const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  // Get all data
  const { name, email, phone, location } = req.body;

  console.log(req.body);

  // get last id
  let last_id = 1;

  if (students.length > 0) {
    last_id = students[students.length - 1].id + 1;
  }

  // Genarata token
  const token = Date.now() + "_" + Math.floor(Math.random() * 10000000);

  // Add a new user
  students.push({
    id: last_id,
    name: name,
    email: email,
    phone: phone,
    location: location,
    photo: req.file ? req.file.filename : "avatar.jpg",
    isVerified: false,
    token: token
  });

   // Send mail
   await veryfiAccountMail(email, 'Verify Account', {
    name,
    email,
    token,
    phone,
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

// Verify account
const verifyAccount = (req, res) => {

   // Read file form student json db
   const students = JSON.parse(
    readFileSync(path.join(__dirname, "../db/student.json"))
  );

  // token
  const token = req.params.token;


  const studentIdIndex = students.findIndex((data) => data.token == token);

  students[studentIdIndex] = {
    ...students[studentIdIndex],
   isVerified : true,
   token : null
  };

  // now write data to json db
  writeFileSync(
    path.join(__dirname, "../db/student.json"),
    JSON.stringify(students)
  );

  res.redirect("/student/");

 
}

module.exports = {
  showAllStudents,
  showAllUnverifiedStudents,
  createStudents,
  singleStudent,
  editStudent,
  updateStudent,
  studentDataStore,
  deleteStudent,
  verifyAccount
};
