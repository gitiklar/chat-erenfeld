import { createSlice } from "@reduxjs/toolkit";

import { login } from "./actions";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login](state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export default slice.reducer;
