import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favlist: [],
};

export const favSlice = createSlice({
  name: "favoritelist",
  initialState: initialState,
  reducers: {
    updatedata: (state, { payload }) => {},
    addCoinToList: (state, { payload }) => {
      const coin = state.favlist.find((coin) => coin.name === payload.name);
      console.log(state.favlist);
      if (!coin) state.favlist.push(payload);
    },
    removeCoinfromList: (state, { payload }) => {
      const coin = state.favlist.find((coin) => coin.name === payload.name);
      if (coin !== "") {
        state.favlist = state.favlist.filter(
          (item) => item.name !== payload.name
        );
      }
    },
  },
});
export const { addCoinToList, removeCoinfromList } = favSlice.actions;
export default favSlice.reducer;
