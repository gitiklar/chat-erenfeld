import { createAction } from "@reduxjs/toolkit";
import * as MessagesTypes from "./actionTypes";

export const fetchChatMessagesSuccessfully = createAction(
  MessagesTypes.CHAT_FETCH_MESSAGES_SUCCESSFULLY,
  (messages) => {
    return {
      payload: messages,
    };
  }
);

export const fetchChatMessagesFailed = createAction(
  MessagesTypes.CHAT_FETCH_MESSAGES_FAILED
);
