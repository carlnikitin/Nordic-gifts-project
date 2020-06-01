const express = require("express");
const router = express.Router();
const auth = require("../auth");
const userController = require("../controller/userController");

router.post("/login", userController.loginUser);
router.get("/me", auth, userController.getUserDetails);

module.exports = router;
