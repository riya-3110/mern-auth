// import User from "../models/user.model.js";
// import bcryptjs from "bcryptjs";

// export const signup = async (req, res, next) => {
//   const { username, email, password } = req.body;
//   const hashedPassword = bcryptjs.hashSync(password, 10);
//   const newUser = new User({ username, email, password: hashedPassword });
//   try {
//     await newUser.save();
//     res.status(201).json({ message: "Signup successful" });
//   } catch (error) {
//     next(error);
//   }
// };

import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create and save new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
