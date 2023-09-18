import express from "express";
import { getPosts, createPosts} from "../controllers/post.js";

const router = express.Router();

router.post('/',createPosts);
router.get('/',getPosts);
// router.delete('/delete/:id', deleteForm);
// router.put('/update/:id', updateForm);

export default router;