import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
// router.put('/update/:id', updateForm);

export default router;
