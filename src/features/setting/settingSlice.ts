import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Setting = {
  color:string,
  theme:string
};

const initialState: Setting = localStorage.getItem("color")
  ? JSON.parse(localStorage.getItem("color") || "{}")
  : {
      color:"",
      theme:""
    };

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
     
    updateSetting: (state, action: PayloadAction<Setting>) => {
      state.color= action.payload?.color;
      localStorage.setItem("color", JSON.stringify(state));
    },
  },
});

export const {updateSetting} = settingSlice.actions;
export const selectSetting = (state: RootState) => state.setting;

export default settingSlice.reducer;
