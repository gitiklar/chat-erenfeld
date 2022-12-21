import { createSelector } from "@reduxjs/toolkit";

export const getAuth = (state) => {
  return state.auth;
};

export const getIsUserLoggedIn = createSelector(getAuth, (auth) => {
  return auth.user && auth.user.uid;
});

export const getLoggedInUserUid = createSelector(
  getAuth,
  (auth) => auth.user?.uid
);

export const getLoggedInFirebaseUser = createSelector(
  getAuth,
  (auth) => auth.firebaseUser || {}
);
