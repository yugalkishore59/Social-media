import { create } from "zustand";
import * as api from "../api";

const useAuthStore = create((set) => ({
  AuthData: null,
  signUp: async (_data) => {
    try {
      const _authData = await api.signUp(_data);
      set({ AuthData: _authData.data.result });
      localStorage.setItem("user", JSON.stringify(_authData.data));
    } catch (error) {
      console.log(error);
    }
  },
  signIn: async (_data) => {
    try {
      const _authData = await api.signIn(_data);
      set({ AuthData: _authData.data.result });
      localStorage.setItem("user", JSON.stringify(_authData.data));
    } catch (error) {
      console.log(error);
    }
  },
  signOut: async () => {
    try {
      set({ AuthData: null });
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useAuthStore;
