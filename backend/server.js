import express from "express";
import authRoutes from "./routes/auth.routes.js";
import "dotenv/config";
import { connectMongoDB } from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
  connectMongoDB();
});
