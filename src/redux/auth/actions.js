import { createAction, nanoid } from "@reduxjs/toolkit";

export const login = createAction("auth/login", (name) => {
  
  return {
    payload: { uid: nanoid(), name },
  };
});
