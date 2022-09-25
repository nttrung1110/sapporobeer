import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    showOverlay: false,
  },
  reducers: {
    showOverlay(state) {
      state.showOverlay = true;
    },
    hideOverlay(state) {
      state.showOverlay = false;
    },
  },
  extraReducers: {},
});

export const { showOverlay, hideOverlay } = layoutSlice.actions;

export default layoutSlice.reducer;
