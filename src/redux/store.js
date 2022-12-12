import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/slice";
import chatReducer from "./chat/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    chat: chatReducer,
    auth: authReducer
  },
});
window.store = store;
export default store;
