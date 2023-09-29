import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DaysReserved {
  numberOfDays: number | null;
  from : string | null;
    to : string | null;
    offer : boolean | null;
}

interface Order {
  data: DaysReserved;
  dataExist: boolean;
}

const initialState: Order = {
  data: {
    numberOfDays: null,
    from: null,
    to: null,
    offer : true
  },
  dataExist: false
};

export const Days = createSlice({
  name: 'Days',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<DaysReserved>) => {
      state.data = action.payload
      if (action.payload.offer === true && action.payload.from !== null) {
        state.dataExist = true;
        //add 7 days when offer is true
        state.data.numberOfDays = Math.floor((new Date(action.payload.from).getTime()) + (7 * 24 * 60 * 60 * 1000))
      }
      else if (action.payload.from !== null && action.payload.to !== null && action.payload.offer === false) {
        state.dataExist = true;
        //calculate days between two dates
        state.data.numberOfDays = Math.floor((new Date(action.payload.to).getTime() - new Date(action.payload.from).getTime()) / (24 * 60 * 60 * 1000))
      }
    },
  },
})

export const { setOrder } = Days.actions

export default Days.reducer