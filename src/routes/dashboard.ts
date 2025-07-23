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

router.use(authMiddleware)

router.get("/last-data", requireAdmin, getLastData);
router.get("/last-income", requireAdmin, getLastIncome);
router.get("/normal-data", requireAdmin, getNormalData);

router.get("/coders-type", requireUser, getCodersType);
router.get("/new-employees", requireUser, getNewEmployes);
router.get("/solid-products", requireUser, getSolidProducts);

export default router;
