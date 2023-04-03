const { json } = require("express");
const { readFileSync } = require("fs");
const path = require("path");

const showHomepage = (req, res) => {

  res.render("index");
};



module.exports = {
  showHomepage

};
