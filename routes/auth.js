import express from "express";
import { login } from "../controllers/auth.js";
const router = express.Router();

//import { login } from "../controllers/auth";
router.post("/login", login);
//router.post("/register", register);
export default router;
