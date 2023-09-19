import { create } from "zustand";
import * as api from "../api";

const usePostStore = create((set) => ({
  posts: [],
  isEdit: false,
  editId: "",
  toggleIsEdit: (_isEdit, _editId = "") => {
    set({ isEdit: _isEdit, editId: _editId });
  },
  getPosts: async () => {
    try {
      const _posts = await api.getPosts();
      set({ posts: _posts.data });
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (post) => {
    try {
      const createdPost = await api.createPost(post);
      const temp = createdPost.data.newPost;
      set((state) => ({ posts: [...state.posts, temp] }));
    } catch (error) {
      console.log(error);
    }
  },
  updatePost: async (id, post) => {
    try {
      const updatedPost = await api.updatePost(id, post);
      set((state) => ({
        posts: state.posts.map((_post) =>
          id === _post._id ? updatedPost.data : _post
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
        posts: state.posts.filter((post) => post._id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default usePostStore;
