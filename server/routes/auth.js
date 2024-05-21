import express from "express";
import { } from "../controllers/user.js";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router()

//user
router.post("/signup",signup)

//signin
router.post("/signin",signin)

//google auth
router.post("/google",googleAuth)

export default router;