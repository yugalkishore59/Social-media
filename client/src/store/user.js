import { create } from "zustand";
import * as api from "../api";

const useAuthStore = create((set) => ({
  AuthData: [],
  signUp: async (data) => {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  signIn: async (data) => {
    try {
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useAuthStore;
