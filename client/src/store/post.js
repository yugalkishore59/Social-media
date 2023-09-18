import { create } from 'zustand'
import * as api from '../api';

const usePostStore = create((set) => ({
  posts: [],
  getPosts: async () => {
        try {
            set({ posts: await api.fetchPosts() })
        } catch (error) {
            console.log(error);
        }   
    },
    createPost: async (post) => {
        try {
            const createdPost = await api.createPosts(post);
            set((state) => ({ posts: [...state.posts, createdPost] }));
        } catch (error) {
          console.log(error);
        }
      },
}))

export default usePostStore;