import { mergeMap, map, takeUntil, catchError, repeat } from "rxjs/operators";

import { ofType } from "redux-observable";
import { of } from "rxjs";

import * as types from "./actionTypes";
import { fetchUser, listenAuthChange } from "../../services/auth";
import { initApp } from "./actions";
import { getLoggedInUserUid } from "./selectors";

export const listenToAuthChange = (action$, store) => {
  return action$.pipe(
    ofType(initApp.toString()),
    mergeMap(() => {
      return listenAuthChange().pipe(
        map((user) => {
          const state = store.value;
          const storedUser = state.auth.user;
          if (!user) {
            return !storedUser
              ? {
                  type: types.AUTH_LOGGED_OUT,
                  user,
                }
              : {
                  type: types.AUTH_LOG_OUT,
                  user: storedUser,
                };
          } else if (!storedUser || storedUser.uid !== user.uid) {
            return {
              type: types.AUTH_LOGGED_IN,
              user,
            };
          } else {
            return {
              type: types.AUTH_ALREADY_LOGGED_IN,
            };
          }
        })
      );
    }),
    catchError((error) => {
      return of({
        type: types.AUTH_CHANGE_FAILED,
        error: error?.message,
      });
    })
  );
};

export const fetchFirebaseUserEffect = (action$, store) =>
  action$.pipe(
    ofType(types.AUTH_LOGGED_IN),
    mergeMap(async () => {
      try {
        const state = store.value;
        const loggedInUserUID = getLoggedInUserUid(state);
        const firebaseUser = await fetchUser(loggedInUserUID);
        return {
          type: types.AUTH_FETCH_FIREBASE_USER,
          firebaseUser,
        };
      } catch (error) {
        return {
          type: types.AUTH_FETCH_FIREBASE_USER_FAILED,
          error,
        };
      }
    })
  );
