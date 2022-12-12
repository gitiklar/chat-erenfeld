import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    uid: "hjkhlkjhlkjhlkhkj",
    name: "gita",
  },
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
  },
});

const { login } = slice.actions;
export default slice.reducer;
