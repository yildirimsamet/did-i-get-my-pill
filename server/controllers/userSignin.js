const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const dbConnect = require("../utils/dbConnect");
const userSignin = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (email && password) {
      dbConnect();
      const user = await User.findOne({ email });
      if (user) {
        const isPassTrue = await bcrypt.compare(password, user.password);
        if (isPassTrue) {
          const token = jwt.sign(
            {
              email: user.email,
              name: user.name,
              surname: user.surname,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1d",
            }
          );
          return res.json({ success: true, data: token });
        } else {
          return res.json({ success: false, message: "Wrong password." });
        }
      }else{
          return res.json({success:false,message:"User doesn't exist."})
      }
    } 
    else {
      return res.json({
        success: false,
        message: "Please provide required fields.",
      });
    }
  }
};
module.exports = userSignin;
