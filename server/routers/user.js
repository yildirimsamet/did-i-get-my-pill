const express = require("express");
const userSignup = require("../controllers/userSignup");
const userSignin = require("../controllers/userSignin");
const userTodaysPillTaken = require("../controllers/userTodaysPillTaken");
const isUserTodaysPillTaken = require("../controllers/isUserTodaysPillTaken");
const router = express.Router();


router.use("/signup",userSignup)
router.use("/signin",userSignin)
router.use("/todaysPillTaken",userTodaysPillTaken)
router.use("/isTodaysPillTaken",isUserTodaysPillTaken)

module.exports=router;