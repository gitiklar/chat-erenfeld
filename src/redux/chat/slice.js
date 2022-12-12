import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateMessages(state, action) {
      state.messages = action.payload;
    },
  },
});

export const { updateMessages } = slice.actions;
export default slice.reducer;
