import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected: ", conn.connection.host);

  } catch (error) {
    console.log("Error when connecting to database.", error);
    process.exit(1);
  }
};
