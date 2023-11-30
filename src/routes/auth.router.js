const express = require("express");
const router = express.Router();
const {login, signup, secret} = require("../controllers/auth.cont");

router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
