import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create, getblogs } from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getblogs", getblogs);

export default router;
