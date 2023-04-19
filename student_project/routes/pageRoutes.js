const express = require("express");
const path = require("path");
const {showHomepage} = require("../controllers/pageController");


// init router
const router = express.Router();

// Routing
router.get("/", showHomepage);


// export
module.exports = router;
