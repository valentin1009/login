import express from "express";
import authRoutes from "./auth";

const router = express.Router();

router.use('/user', authRoutes);

export default router;