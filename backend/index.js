import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDB.js'
import cookieParser from 'cookie-parser'
import authRouter from './route/authRoute.js'

dotenv.config()
import cors from 'cors'
import userRouter from './route/userRoute.js'



dotenv.config()

const app = express()
const port = process.env.PORT 

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173", credentials:true

}))

// Routes
app.use("/api/auth", authRouter)
app.use("/api/user",userRouter )

app.get("/", (req, res) => {
    res.send("Hello from server")
})

// Start server and connect to DB
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    connectDb();
})
