import { Router } from "express";
import { login, logout, getCurrentUser } from "../controllers/authController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);

router.get("/me", authMiddleware, getCurrentUser);

export default router;
