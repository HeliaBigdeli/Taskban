import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import workspaceIdSlice from "../features/workspacesSlice";
import updateReducer from '../features/updateSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        workspaceId:workspaceIdSlice,
        update: updateReducer,
    }
})    

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch