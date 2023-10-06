import { configureStore } from '@reduxjs/toolkit'
import { Days } from './(components)/Shared/Days';
import { Hostel } from './(components)/Shared/Hostel';
import { Pack } from './(components)/Shared/Pack';
import { informationsOfer } from './(components)/Shared/Info';

export const store = configureStore({
  reducer: {
    Pack: Pack.reducer,
    Hostel: Hostel.reducer,
    Days: Days.reducer,
    Info : informationsOfer.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch