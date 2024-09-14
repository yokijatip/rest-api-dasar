const express = require("express");
const router = express.Router();

const UserController = require("../controller/users.js");

// CREATE - POST
router.post("/", UserController.createNewUser);

// READ - GET
router.get("/", UserController.getAllUsers);

// UPDATE - PATCH
router.patch("/:id", UserController.updateUser);

// DELETE - DELETE
router.delete("/:id", UserController.deleteUser);

module.exports = router;
