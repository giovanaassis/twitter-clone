import { Router } from "express";
import { UsersController } from "../controllers/users/index.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = Router();

router.get("/me", protectRoute, UsersController.getMe);
router.post("/signup", UsersController.signup);
router.post("/login", UsersController.login);
router.post("/logout", UsersController.logout);

export default router;
