import express from "express";
import User from "../models/User.js";
import { getuser } from "../controllers/User.js";
const router = express.Router();
router.get("/:id", getuser);

export default router;
