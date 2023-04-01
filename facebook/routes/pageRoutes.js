const express = require("express");
const path = require("path");
const {
  showHomepage,
  showTeampage,
  showaboutpage,
  showContactpage,
} = require("../controller/pageController");
const { checkAge, currancyCheck } = require("../controller/helperController");

// init router
const router = express.Router();

// Routing
router.get("/", showHomepage);

router.get("/team", showTeampage);

router.get("/about", showaboutpage);

router.get("/contact", showContactpage);

router.post("/check-age", checkAge);

router.get("/currancy/:doller/:type", currancyCheck);

// export
module.exports = router;
