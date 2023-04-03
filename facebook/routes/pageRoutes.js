const express = require("express");
const path = require("path");
const {
  showHomepage,
  showTeampage,
  showaboutpage,
  showContactpage,
} = require("../controllers/pageController");
const { checkAge, currancyCheck } = require("../controllers/helperController");
const { ageValidator } = require("../middlewares/ageValidatorMiddleware");

// init router
const router = express.Router();

// Routing
router.get("/", showHomepage);

router.get("/staff", showaboutpage);

// router.get("/team", showTeampage);

router.get("/contact", showContactpage);

router.post("/check-age", ageValidator, checkAge);

router.get("/currancy/:doller/:type", currancyCheck);

// export
module.exports = router;
