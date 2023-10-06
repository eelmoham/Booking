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
        //calculate number of days
        action.payload.numberOfDays = Math.floor((Date.parse(action.payload.to) - Date.parse(action.payload.from)) / 86400000);
      }
      
    },
  },
})

export const { setOrder } = Days.actions

export default Days.reducer