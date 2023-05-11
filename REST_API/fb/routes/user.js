const express = require("express");
const { getAllUser, createUser } = require("../controllers/userController");

// create a router
const router = express.Router();

// Users routes
router.get("/", getAllUser)
router.post("/", createUser)

// Exports router
module.exports = router;