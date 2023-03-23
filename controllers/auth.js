import User from "../models/User.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const userexist = await User.findOne({ email: req.body.email });
    console.log(userexist);
    if (userexist)
      return res.status(400).json({ msg: "user is already exist" });
    const newUser = await new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profileimg: req.body.profileimg,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: "user is not found" });
  const ismatch = password === user.password;
  if (ismatch) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ user, token });
  } else {
    res.status(400).json({ msg: "invalid password" });
  }
};
