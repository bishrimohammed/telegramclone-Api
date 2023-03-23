import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/User.js";
import authRoute from "./routes/auth.js";
import conservationRoute from "./routes/conservation.js";
import messageRoute from "./routes/message.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";
import { register } from "./controllers/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
dotenv.config();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 43200000,
  })
  .then(() => console.log("connected"));
app.use(express.json());

app.use("/auth/register", upload.single("picture"), register);
app.use("/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/conservations", conservationRoute);
app.use("/api/messages", messageRoute);
app.listen(4000, () => {
  console.log("hello");
});
