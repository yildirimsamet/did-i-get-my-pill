const User = require("../models/User")
const bcrypt = require("bcryptjs");
const dbConnect = require("../utils/dbConnect")
const userSignup=async(req,res)=>{
    if(req.method==="POST"){
        const {email,password,name,surname}=req.body;
        if(email&&password&&name&&surname){
            dbConnect();
            const isAlreadyuser = await User.findOne({ email });
            if (isAlreadyuser) {
              return res.json({
                success: false,
                message: "User already exist.",
              });
            }
           try {
                const hashedPass = bcrypt.hashSync(password, 10);
                await User.create({
                    email,
                    password: hashedPass,
                    name,
                    surname,
                });
                res.json({success:true,data:"User created successfully."})
           } catch (err) {
               res.json({success:false,message:err.message})
           }
            
        }else{
            return res.json({success:false,message:"Please provide required fields."})
        }
    }

}
module.exports = userSignup;