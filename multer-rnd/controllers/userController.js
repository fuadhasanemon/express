const { json } = require("express");
const { readFileSync } = require("fs");
const path = require("path");

// Show user form
const showUserForms = (req, res) => {
  res.render("../views/users/index");
};

const storeUserData = (req, res) => {
  res.json(req.body);
};

module.exports = {
  showUserForms,
  storeUserData,
};
