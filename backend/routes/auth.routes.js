import { Router } from "express";
import { UsersController } from "../controllers/users/index.js";

const router = Router();

router.post("/signup", UsersController.signup);
router.post("/login", UsersController.login);
router.post("/logout", UsersController.logout);

export default router;
