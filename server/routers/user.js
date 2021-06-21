const express = require("express");
const userSignup = require("../controllers/userSignup");
const router = express.Router();


router.use("/signup",userSignup)

module.exports=router;