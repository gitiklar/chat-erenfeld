import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import chatReducer from "./chat/slice";
import authReducer from "./auth/slice";
import rootEffects from "./effects";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    chat: chatReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});
epicMiddleware.run(rootEffects);

export default store;
