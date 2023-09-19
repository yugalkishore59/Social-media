import { create } from "zustand";
import * as api from "../api";

const usePostStore = create((set) => ({
  posts: [],
  getPosts: async () => {
    try {
      const _posts = await api.fetchPosts();
      set({ posts: [_posts] });
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (post) => {
    try {
      const createdPost = await api.createPost(post);
      set((state) => ({ posts: [...state.posts, createdPost] }));
      alert("new posts");
    } catch (error) {
      console.log(error);
    }
  },
  updatePost: async (id, post) => {
    try {
      const updatedPost = await api.updatePost(id, post);
      set((state) => ({
        posts: state.posts.map((_post) =>
          updatedPost._id === _post._id ? updatedPost : _post
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: async (id) => {
    try {
      await api.deletePost(id);
      set((state) => ({
        posts: state.posts.map((_post) => {
          if (_post._id !== id) return _post;
        }),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default usePostStore;
