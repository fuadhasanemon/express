const { json, app } = require("express");
const { readFileSync } = require("fs");
const path = require("path");
const nodemailer = require("nodemailer")

// Show user form
const showUserForms = (req, res) => {
  res.render("users/index");
};

const storeUserData = (req, res) => {

// Make transporter for sendin emails
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "587",
  auth: {
    user: "fuad.visuali@gmail.com",
    pass: "wlitjrdazpxtwdhx"
  }
})

transport.sendMail({
  from: "fuad.visuali@gmail.com",
  to: req.body.email,
  subject: "Account confirmation",
  text: `Hi ${req.body.name} your account is confirmed`
});

  res.json(req.body);
};

module.exports = {
  showUserForms,
  storeUserData,
};
