import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface infoOrder {
  fullName: string | null;
  Telephone: string | null;
  Email: string | null;
  Level: string | null;
  Age: number | null;
  Guest: number | null;
  service: {
    id : number | null;
    title: string | null;
    price: number | null;
  }[];
}

interface Order {
  data: infoOrder;
  dataExist: boolean;
}

const initialState: Order = {
  data: {
    fullName: null,
    Telephone: null,
    Email: null,
    Level: null,
    Age: null,
    Guest: null,
    service: [{
      id : null,
      title: null,
      price: null,
    }],
  },
  dataExist: false,
};

export const informationsOfer = createSlice({
  name: "Info",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<infoOrder>) => {
      state.data = action.payload;
      if (action.payload.fullName  && action.payload.Telephone  && action.payload.Email && action.payload.Level  && action.payload.Age  && action.payload.Guest && action.payload.service.length > 0) {
        state.dataExist = true;
      }
    },
  },
});

export const { setOrder } = informationsOfer.actions;

export default informationsOfer.reducer;
