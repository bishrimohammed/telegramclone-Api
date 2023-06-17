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
  const conservat = await Conservation.find({
    member: { $all: [req.params.userId] },
  });
  try {
    // const savedcon = await conserv.save();
    console.log(conservat);
    console.log(req.params.userId);
    res.status(200).json(conservat);
  } catch (err) {
    res.status(500).json(err);
  }
};
