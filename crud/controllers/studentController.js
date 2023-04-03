const { json } = require("express");
const { readFileSync } = require("fs");
const path = require("path");

const showAllStudents = (req, res) => {

  res.render("students/index");
};

const createStudents = (req, res) => {

    res.render("students/create");
  };


  const singleStudent = (req, res) => {

    res.render("students/show");
  };

  const editStudent = (req, res) => {

    res.render("students/edit");
  };




module.exports = {
    showAllStudents,
    createStudents,
    singleStudent,
    editStudent
};
