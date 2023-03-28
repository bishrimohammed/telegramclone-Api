import mongoose from "mongoose";
import User from "../models/User.js";

export const getuser = async (req, res) => {
  
  const id = req.params.id;
  const user = await User.findById(id);
  
    res.status(200).json(user);
};
