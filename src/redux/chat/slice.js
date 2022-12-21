import { createSlice } from "@reduxjs/toolkit";

import { fetchChatMessagesSuccessfully } from "./actions";
import * as types from "./actionTypes";

const initialState = {
  messages: {},
};

const slice = createSlice({
  name: "chat",
  initialState,
  extraReducers: {
    [fetchChatMessagesSuccessfully](state, action) {
      state.messages = action.payload;
    },
    [types.CHAT_MESSAGES_ADDED](state, action) {
      state.messages = { ...state.messages, ...action.payload };
    },
  },
});

export default slice.reducer;
