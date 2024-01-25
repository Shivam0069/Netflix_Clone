import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
  name: "header",
  initialState: {
    selected: "Home",
  },
  reducers: {
    changeSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { changeSelected } = HeaderSlice.actions;
export default HeaderSlice.reducer;
