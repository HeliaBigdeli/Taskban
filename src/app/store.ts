import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import workspacesReducer from "../features/workspacesSlice"
import workspacesSlice from '../features/workspacesSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        workspaces:workspacesSlice,
    }
})    

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch