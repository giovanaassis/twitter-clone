import User from "../../models/user.model.js";

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getMe controller: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
