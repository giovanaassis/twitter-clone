import { Router } from "express";
import { UsersController } from "../controllers/users/index.js";

const router = Router();

router.get("/signup", UsersController.signup);
router.get("/login", UsersController.login);
router.get("/logout", UsersController.logout);

export default router;
