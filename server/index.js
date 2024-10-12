import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";
const app= express()
app.use(cors())

dotenv.config();
const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("DATABASE connected");
    })
    .catch((err) => {
        console.log("ERROR in DB Connect: " + err.message);
        throw err;
    })
};
// app.use(cors({
//     origin:["https://we-tube-server.vercel.app"],
//     methods:["POST","GET"],
//     credentials:true
// }))
app.use(cookieParser())
app.use(express.json())
app.use("/api/users",UserRoutes)
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/auth",authRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });
  
app.listen(8800,()=>{
    connect();
    console.log("CONNECTED server");
})