import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chat/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    auth: authReducer
  },
});
window.store = store;
export default store;
