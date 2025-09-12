
import express from "express"
import { login, logOut, signup } from "../controller/authController.js";


const authRouter = express.Router()

authRouter.post("/signup",signup)
authRouter.post("/login", login);
authRouter.get("/logout", logOut)


export default authRouter