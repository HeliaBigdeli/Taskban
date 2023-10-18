import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface ISection {
  workspace: number;
  project: number;
}

const initialState: ISection = {
  workspace: 0,
  project: 0
};

export const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    addWorkSpace: (state) => {
      state.workspace += 1;
    },
    addProject: (state) => {
      state.project += 1;
    }
  },
});

export const { addWorkSpace, addProject } = updateSlice.actions;

export const workSpaceUpdate = (state: RootState) => state.update;
export const projectUpdate = (state: RootState) => state.update;

export default updateSlice.reducer;
