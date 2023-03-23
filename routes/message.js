import express from "express";
const router = express.Router();
import { createMessage, getMessages } from "../controllers/message.js";

router.post("/", createMessage);
router.get("/:conservationId", getMessages);
export default router;
