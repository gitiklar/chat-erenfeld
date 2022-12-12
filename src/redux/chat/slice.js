import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    onSendMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});

export const { onSendMessage } = slice.actions;
export default slice.reducer;
