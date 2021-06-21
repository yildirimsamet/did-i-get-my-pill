require("dotenv").config();
const cors =require("cors")
const express=require("express");
const app = express();
const PORT=process.env.PORT||5000;
const user = require("./routers/user");

app.use(cors());

app.use(express.json());

app.use("/user", user);

app.get("/",(req,res)=>res.json({message:"hello world"}))

app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`))