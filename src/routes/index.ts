import { Router } from "express";
import dashboardRoutes from "./dashboard";
import authRoutes from "./auth";

const router = Router();

// Dashboard routes
router.use("/dashboard", dashboardRoutes);
router.use("/auth", authRoutes);

export default router;
