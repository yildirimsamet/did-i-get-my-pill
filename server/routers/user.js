const express = require("express");
const userSignup = require("../controllers/userSignup");
const userSignin = require("../controllers/userSignin");
const router = express.Router();


router.use("/signup",userSignup)
router.use("/signin",userSignin)

module.exports=router;