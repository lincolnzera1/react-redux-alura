import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const contadorSlice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    incrementar: (state, { payload }) => {
      state += 1;
      return state;
    },
    decrementar: (state, { payload }) => {
      state -= 1;
      return state;
    },
  },
});

export const { incrementar, decrementar } = contadorSlice.actions;
export default contadorSlice.reducer;
