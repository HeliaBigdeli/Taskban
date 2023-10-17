import { createSlice } from "@reduxjs/toolkit";

type Workspaces = {
  workspace_id: number;
  project_id: number;
};

const initialState: Workspaces = {
  workspace_id: 0,
  project_id: 0,
};

export const WorkspacesSlice = createSlice({
    name: "workspaces", initialState, reducers: {
        
    }
})
export default WorkspacesSlice.reducer; 
