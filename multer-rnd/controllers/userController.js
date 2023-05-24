const { json, app } = require("express");
const { readFileSync } = require("fs");
const path = require("path");
const sendMail = require("../utility/sendMail");
const SendSms = require("../utility/sendSms");

// Show user form
const showUserForms = (req, res) => {
  res.render("users/index");
};

const storeUserData = (req, res) => {

  sendMail(req.body.email, "Welcome");

  SendSms(req.body.phone, `Hi ${req.body.name}, You are welcome to marn stack and your email is ${req.body.email} `)

  res.json(req.body);
};

module.exports = {
  showUserForms,
  storeUserData,
};
