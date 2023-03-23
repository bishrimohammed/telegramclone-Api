import Message from "../models/message.js";
import Conservation from "../models/conservation.js";
export const createMessage = async (req, res) => {
  const { conservationId, senderId, text } = req.body;
  try {
    const message = new Message({
      conservationId,
      senderId,
      text,
    });
    const savedmessage = await message.save();
    const conservation = await Conservation.findById(conservationId);
    conservation.lastMessage.lastText = savedmessage.text;
    conservation.lastMessage.lastTextTime = savedmessage.createdAt;
    const updatedConservation = await conservation.save();
    // const updatedConservation = Conservation.findByIdAndUpdate(conservationId,{lastMessage:l})
    res.status(200).json(savedmessage);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getMessages = async (req, res) => {
  const conservId = req.params.conservationId;

  try {
    const message = await Message.find({ conservationId: conservId }).sort({
      createdAt: 1,
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
};
