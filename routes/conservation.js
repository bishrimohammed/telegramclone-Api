import express from "express";
const router = express.Router();
import {
  createConservation,
  userConservation,
} from "../controllers/conservation.js";
router.get("/:userId", userConservation);
router.post("/", createConservation);
export default router;
