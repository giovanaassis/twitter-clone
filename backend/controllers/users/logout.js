export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json("Logged out sucessfully");
  } catch (error) {
    console.log("Error in logout controller: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
