import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WorkspacesId = {
  workspace_id: number;
  project_id: number;
  workspace_name: string;
};

const initialState: WorkspacesId = localStorage.getItem("workspaceId")
  ? JSON.parse(localStorage.getItem("workspaceId") || "{}")
  : {
      workspace_id: 0,
      project_id: 0,
      workspace_name: "",
    };

export const workspaceIdSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<WorkspacesId>) => {
      state = {
        ...action.payload,
      };
      localStorage.setItem("workspaceId", JSON.stringify(state));
      return state;
    },
  },
});
export const { update } = workspaceIdSlice.actions;

export default workspaceIdSlice.reducer;
