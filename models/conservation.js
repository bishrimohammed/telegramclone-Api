import mongoose from "mongoose";

const ConservationSchema = new mongoose.Schema(
  {
    member: {
      type: Array,
    },
    lastMessage: {
      lastText: {
        type: String,
        default: "Joined Telegram",
      },
      lastTextTime: {
        type: Date,
        default: new Date(),
      },
    },
  },
  { timestamps: true }
);
const Conservation = mongoose.model("Conservation", ConservationSchema);
export default Conservation;
