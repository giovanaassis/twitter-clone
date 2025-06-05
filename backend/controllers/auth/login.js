import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../../lib/utils/generateToken.js";
import User from "../../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordValid = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordValid) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      followers: user.followers,
      following: user.following,
      profileImg: user.profileImg,
      coverImg: user.coverImg,
    });
  } catch (error) {
    console.log("Error in login controller: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
