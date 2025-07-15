import { Router } from "express";
import {
  getLastData,
  getLastIncome,
  getNormalData,
  getCodersType,
  getNewEmployes,
  getSolidProducts,
} from "../controllers/dashboardController";
import { authMiddleware, requireAdmin, requireUser } from "../middleware/auth";

const router = Router();

// Admin Dashboard Endpoints - require admin role
router.get("/last-data", authMiddleware, requireAdmin, getLastData);
router.get("/last-income", authMiddleware, requireAdmin, getLastIncome);
router.get("/normal-data", authMiddleware, requireAdmin, getNormalData);

// User Dashboard Endpoints - require user role (admin can also access)
router.get("/coders-type", authMiddleware, requireUser, getCodersType);
router.get("/new-employees", authMiddleware, requireUser, getNewEmployes);
router.get("/solid-products", authMiddleware, requireUser, getSolidProducts);

export default router;
