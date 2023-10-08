import { create } from "zustand";
import * as api from "../api";

const useAuthStore = create((set) => ({
  AuthData: [],
  signUp: async (_data) => {
    try {
      const _authData = await api.signUp(_data);
      set({ AuthData: _authData.data.result });
    } catch (error) {
      console.log(error);
    }
  },
  signIn: async (_data) => {
    try {
      const _authData = await api.signIn(_data);
      set({ AuthData: _authData.data.result });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useAuthStore;
