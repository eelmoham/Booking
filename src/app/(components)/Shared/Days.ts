import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DaysReserved {
  numberOfDays: number;
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
    from: null,
    to: null,
    offer : true,
    numberOfDays: 0
  },
  dataExist: false,
};

export const Days = createSlice({
  name: 'Days',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<DaysReserved>) => {
      state.data = action.payload
      if (action.payload.offer === true && action.payload.from !== null) {
        state.dataExist = true;
        if(action.payload.offer === true)
        {
          action.payload.numberOfDays = 7;
        }
      }
      else if (action.payload.from !== null && action.payload.to !== null && action.payload.offer === false) {
        state.dataExist = true;
        action.payload.numberOfDays = ((new Date(action.payload.to).getDate() - new Date(action.payload.from).getDate()) / (1000 * 60 * 60 * 24))
      }
      
    },
  },
})

export const { setOrder } = Days.actions

export default Days.reducer