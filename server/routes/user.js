import express from "express";
import { signIn, signUp } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signUp", signUp);
// router.get("/", getPosts);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// // router.put('/update/:id', updateForm);

export default router;
