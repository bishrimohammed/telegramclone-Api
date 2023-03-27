import mongoose from "mongoose";
import User from "../models/User.js";

export const getuser = async (req, res) => {
  //console.log(req.params.userId);
  const userId = req.params.userId;

  try {
    const respon = await User.findById(userId);
    //console.log(respon);
    //const resdata = await respon.json();
    // console.log(resdata);
    res.status(200).json(respon);
  } catch (err) {
    res.status(500).json(err);
  }
};
