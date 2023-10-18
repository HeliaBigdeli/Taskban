import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface ISection {
  workspace: number;
}

const initialState: ISection = {
  workspace: 0,
};

export const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    addWorkSpace: (state) => {
      state.workspace += 1;
    },
  },
});

export const { addWorkSpace } = updateSlice.actions;

export const workSpaceUpdate = (state: RootState) => state.update;

export default updateSlice.reducer;
