import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { saveNewUser, signInUser, signUpUser } from "../../services/auth";

export const initApp = createAction("auth/initApp");


export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, { dispatch, getState }) => {
     await signInUser(email, password);
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ username, email, password }, { dispatch, getState }) => {
    const newUser = await signUpUser(email, password);
    await saveNewUser(newUser, username, password);
  }
);
