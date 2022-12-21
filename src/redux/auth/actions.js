import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { saveNewUser, signUpUser } from "../../services/auth";

export const initApp = createAction("auth/initApp");

export const login = createAction("auth/login", (name) => {
  return {
    payload: { uid: nanoid(), name },
  };
});

export const signUp = createAsyncThunk(
  "auth/signIn",
  async ({ username, email, password }, { dispatch, getState }) => {
    const newUser = await signUpUser(email, password);
    await saveNewUser(newUser, username);
  }
);
