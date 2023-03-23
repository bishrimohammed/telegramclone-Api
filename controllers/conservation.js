import Conservation from "../models/conservation.js";

export const createConservation = async (req, res) => {
  const conserv = new Conservation({
    member: [req.body.senderId, req.body.reaciverId],
  });
  try {
    const savedcon = await conserv.save();
    res.status(200).json(savedcon);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const userConservation = async (req, res) => {
  try {
    const conservation = await Conservation.find({
      member: { $in: [req.params.userId] },
    });
    //const savedcon = await conserv.save();
    res.status(200).json(conservation);
  } catch (err) {
    res.status(500).json(err);
  }
};
