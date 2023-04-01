const path = require("path");

const showHomepage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
};

const showTeampage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/team.html"));
};

const showaboutpage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/about.html"));
};

const showContactpage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/contact.html"));
};

module.exports = {
  showHomepage,
  showTeampage,
  showaboutpage,
  showContactpage,
};
