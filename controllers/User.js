import mongoose from "mongoose";
import User from "../models/User.js";

export const getuser = async (req, res) => {
  console.log(req.params.userId);
  const { userId } = req.params;
  const user = await User.findById(userId);
  try {
    //const resdata = await respon.json();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
