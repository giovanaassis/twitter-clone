import { Router } from "express";
import { AuthController } from "../controllers/auth/index.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = Router();

router.get("/me", protectRoute, AuthController.getMe);
router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

export default router;
