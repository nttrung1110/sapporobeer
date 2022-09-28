import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    showOverlay: false,
    playAudio: false,
    layoutAudio: false,
  },
  reducers: {
    toggleOverLay(state, action) {
      state.showOverlay = action.payload;
    },
    toggleAudio(state, action) {
      state.playAudio = action.payload;
    },
    toggleLayoutAudio(state, action) {
      state.layoutAudio = action.payload;
    },
  },
  extraReducers: {},
});

export const { toggleOverLay, toggleAudio, toggleLayoutAudio } =
  layoutSlice.actions;

export default layoutSlice.reducer;
