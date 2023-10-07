import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isCorrectPassowrd = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isCorrectPassowrd)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const signUp = async (req, res) => {
  try {
    const { username, email, password, repeatPassword } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    if (password !== repeatPassword)
      return res.status(400).json({ message: "Passwords do not match!" });

    // Hash the user's password before saving it to database
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
