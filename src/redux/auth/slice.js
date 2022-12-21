import { createSlice } from "@reduxjs/toolkit";

import * as types from "./actionTypes";

const initialState = {};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [types.AUTH_LOGGED_IN](state, action) {
      state.user = action.user;
    },
    [types.AUTH_LOG_OUT]() {
      return initialState;
    },
    [types.AUTH_FETCH_FIREBASE_USER](state, action) {
      state.firebaseUser = action.firebaseUser;
    },
  },
});

export default slice.reducer;
