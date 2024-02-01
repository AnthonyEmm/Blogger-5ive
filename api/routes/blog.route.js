import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  getblogs,
  deleteblog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getblogs", getblogs);
router.delete("/deleteblog/:postId/:userId", verifyToken, deleteblog);

export default router;
