import { Router } from "express";

const router = Router();

// Test route
router.get("/test", (req, res) => {
  res.json({
    message: "Router is working!",
    timestamp: new Date().toISOString(),
  });
});

export default router;
