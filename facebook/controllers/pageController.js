const { json } = require("express");
const { readFileSync } = require("fs");
const path = require("path");

const showHomepage = (req, res) => {
  // res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
  const slider = readFileSync(path.join(__dirname, "../db/slider.json"));

  res.render("index", {
    slider: JSON.parse(slider.toString()),
  });
};

const showaboutpage = (req, res) => {
  // res.status(200).sendFile(path.join(__dirname, "../public/about.html"));
  res.render("staff", {
    title: "About us",
    desc: "This is our about page",
  });
};

const showContactpage = (req, res) => {
  // res.status(200).sendFile(path.join(__dirname, "../public/contact.html"));
  res.render("contact", {
    title: "contact us",
    desc: "This is our contact page",
  });
};

// const showTeampage = (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "../public/team.html"));
// };

module.exports = {
  showHomepage,
  // showTeampage,
  showaboutpage,
  showContactpage,
};
