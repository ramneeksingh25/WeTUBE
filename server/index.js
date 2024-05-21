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
dotenv.config();
const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("DATABASE connected");
    })
    .catch((err) => {
        throw err;
    })
};

app.use(cors({
    origin:[],
    methods:["POST","GET"],
    credentials:true
}))
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