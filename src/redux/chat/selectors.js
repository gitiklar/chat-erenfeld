import { createSelector } from "@reduxjs/toolkit";

const getChat = (state) => state.chat;

export const getMessages = createSelector(getChat, ({ messages }) =>
  Object.entries(messages).map(([chatId, message]) => ({
    ...message,
    id: chatId,
  }))
);

export const getLastMessageId = createSelector(
  getMessages,
  (messages) => messages[messages.length - 1]?.id
);
