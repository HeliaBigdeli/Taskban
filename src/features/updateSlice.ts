import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface ISection {
  workspace: boolean
}

const initialState: ISection = {
    workspace: false   
}

  export const updateSlice = createSlice({
    name: "update",
    initialState,
    reducers:{
      addWorkSpace: (state) => {
        state.workspace= true
      }
    }
  })

  export const { addWorkSpace } = updateSlice.actions;

  export const selectUpdate = (state: RootState) => state.update.workspace;

  export default updateSlice.reducer;