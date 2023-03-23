import express from "express";
import User from "../models/User.js";
import { getuser } from "../controllers/User.js";
const router = express.Router();
router.get("/:userId", getuser);

/*
router.post("/", async (req, res) => {
  // res.send("ok");
  //console.log(User.schem);
  const user = User.findOne({ email: req.body.email });
  if (user) return res.status(400).json({ msg: "user is already exist" });
  const newUser = await new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    profileimg: req.body.profileimg,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // const userp = User.f
  // console.log(savedUser);
});
*/
export default router;
