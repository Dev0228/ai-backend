import { Router } from "express";
import dashboardRoutes from "./dashboard";
import authRoutes from "./auth";

const router = Router();

router.use("/dashboard", dashboardRoutes);
router.use("/auth", authRoutes);

export default router;
