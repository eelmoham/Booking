import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HostelData {
  id: number | null;
  title: string | null;
  short_description: string | null;
  description: string | null;
  pack_price: number | null;
  day_price: number | null;
  picture: string | null;
}

interface Order {
  data: HostelData;
  dataExist: boolean;
}

const initialState: Order = {
  data: {
    id: null,
    title: null,
    short_description: null,
    description: null,
    pack_price: null,
    day_price: null,
    picture: null
  },
  dataExist: false
};

export const Hostel = createSlice({
  name: 'Hostel',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<HostelData>) => {
      state.data = action.payload
      if (action.payload.id !== null) {
        state.dataExist = true
      }
    },

  },
})


// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { setOrder } = Hostel.actions

export default Hostel.reducer