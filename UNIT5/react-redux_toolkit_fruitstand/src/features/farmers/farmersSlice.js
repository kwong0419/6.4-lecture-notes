import { createSlice } from "@reduxjs/toolkit";

let nextId = 3;

export const farmersSlice = createSlice({
  name: "farmers",
  initialState: {
    1: { id: 1, name: "corey", paid: false },
    2: { id: 2, name: "jon", paid: false },
  },
  reducers: {
    hireFarmer: {
      reducer: (state, action) => {
        state[action.payload.id] = action.payload;
      },
      prepare: (farmer) => ({
        payload: { id: nextId++, ...farmer, paid: false },
      }),
    },
    // hireFarmer: (state, action) => {
    //   action.payload.paid = false;
    //   action.payload.id = nextId++;
    //   state[action.payload.id] = action.payload;
    // },
    payFarmer: (state, { payload }) => {
      state.payload.paid = !state.payload.paid;
    },
  },
});

export const { hireFarmer } = farmersSlice.actions;
export default farmersSlice.reducer;
