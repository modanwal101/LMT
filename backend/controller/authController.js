import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import gentoken from "../config/token.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        let existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter a valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Enter a strong password" });
        }
        let hashpassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashpassword, 
            role
        });
        let token = await gentoken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: `Signup error ${error.message}` });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) { 
            return res.status(404).json({ message: "User not found" });
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        let token = await gentoken(user._id);
        res.cookie("token", token, { 
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: `Login error ${error.message}` });
    }
};

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token"); // ✅ clear cookie synchronously
        return res.status(200).json({ message: "Logged out successfully" }); 
    } catch (error) {
        return res.status(500).json({ message: `Logout error ${error.message}` });
    }
};
