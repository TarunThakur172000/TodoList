import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: localStorage.getItem("displayState") === "grid" ? true : false, 
  // Convert to boolean (true for list, false for grid)
};

const displaySlice = createSlice({
  name: "displayState",
  initialState,
  reducers: {
    toggleDisplay: (state) => {
      state.display = !state.display;  // Toggle display state
      localStorage.setItem("displayState", state.display ? "list" : "grid");
    },
  },
});

export const { toggleDisplay } = displaySlice.actions;
export default displaySlice.reducer;
