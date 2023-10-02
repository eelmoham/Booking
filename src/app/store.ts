import { configureStore } from '@reduxjs/toolkit'
import { Days } from './(components)/Shared/Days';
import { Hostel } from './(components)/Shared/Hostel';
import { Pack } from './(components)/Shared/Pack';
import { informationsOfer } from './(components)/Shared/Info';

export const store = configureStore({
  reducer: {
    // counter : counterSlice,
    Pack: Pack.reducer,
    Hostel: Hostel.reducer,
    Days: Days.reducer,
    Info : informationsOfer.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch