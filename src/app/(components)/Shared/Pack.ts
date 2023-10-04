import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PackOrder {
  id: number | null;
  title: string | null;
  short_description: string | null;
  description: string | null;
  pack_price: number | null;
  day_price: number | null;
  picture: string | null;
  with_hosting: string | null;
}

interface Order {
  data: PackOrder;
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
    picture: null,
    with_hosting: null,
  },
  dataExist: false
};

export const Pack = createSlice({
  name: 'Pack',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<PackOrder>) => {
      state.data = action.payload
      if (action.payload.id !== null) {
        state.dataExist = true
      }
    },

  },
})

export const { setOrder } = Pack.actions

export default Pack.reducer