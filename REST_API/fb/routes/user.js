const express = require("express");
const { getAllUser, createUser, getSingleUser, deleteUser, updateUser } = require("../controllers/userController");

// create a router
const router = express.Router();

// Users routes

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getSingleUser).delete(deleteUser).put(updateUser).patch(updateUser);


// Exports router
module.exports = router;