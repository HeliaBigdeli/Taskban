import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Cookies from "js-cookie";

type Auth = {
  username: string;
  first_name: string;
  last_name: string;
  refresh?: string;
  access: string;
};

const initialState: Auth = {
  username: "",
  first_name: "",
  last_name: "",
  access: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      state.username = action.payload?.username;
      state.first_name = action.payload?.first_name;
      state.last_name = action.payload?.last_name;
      state.access = action.payload?.access;

      Cookies.set("refresh", action.payload?.refresh, {expires: 365});
    },
    logout: (state) => {
      state = {
        username: "",
        first_name: "",
        last_name: "",
        access: "",
      };

      Cookies.remove("refresh");
    },
    refresh: (state, action: PayloadAction<Partial<Auth>>) => {
      state = {
        ...state,
        access: action.payload?.access || "",
      };
    },
  },
});

export const { login, logout, refresh } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.access;

export default authSlice.reducer