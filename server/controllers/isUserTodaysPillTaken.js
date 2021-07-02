const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dbConnect = require("../utils/dbConnect");
const isUserTodaysPillTaken = async (req, res) => {
  if (req.method === "GET") {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Token is not valid." });
    }
    try {
      const verifiedUser = await jwt.verify(token, process.env.JWT_SECRET);
      if (verifiedUser) {
        dbConnect();
        const user = await User.findById(verifiedUser._id);
        const today = new Date().toString().slice(0, 15).replace(/\s/g, "-");
        if (user.pillTakenDays.includes(today)) {
          //if user not take the pill then add today to the pillTakenDays

          return res.json({ success: true, data: true });
        } else {
          return res.json({
            success: true,
            data: false,
          });
        }
      }
    } catch {
      return res.json({ success: false, message: "Something went wrong!" });
    }
  }
};
module.exports = isUserTodaysPillTaken;
