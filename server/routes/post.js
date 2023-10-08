import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createPost);
router.get("/", getPosts);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
// router.put('/update/:id', updateForm);

export default router;
