import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface informationsOfer {
  fullName: string | null;
  Telephone: string | null;
  Email: string | null;
  Level: string | null;
  Age: number | null;
  Guest: number | null;
  service: {
    title: string | null;
    price: number | null;
  };
}

interface Order {
  data: informationsOfer;
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
    service: {
      title: null,
      price: null,
    },
  },
  dataExist: false,
};

export const informationsOfer = createSlice({
  name: "informationsOfer",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<informationsOfer>) => {
      state.data = action.payload;
      if (action.payload.fullName !== null && action.payload.Telephone !== null && action.payload.Email !== null && action.payload.Level !== null && action.payload.Age !== null && action.payload.Guest !== null) {
        state.dataExist = true;
      }
    },
  },
});

export const { setOrder } = informationsOfer.actions;

export default informationsOfer.reducer;
