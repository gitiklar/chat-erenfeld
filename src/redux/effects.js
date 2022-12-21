import { combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";

import { listenToAuthChange, fetchFirebaseUserEffect } from "./auth/effects";
import { fetchChatMessagesEffect, listenToNewMessagesEffect } from "./chat/effects";

export default (action$, store$, dependencies) =>
  combineEpics(
    listenToAuthChange,
    fetchFirebaseUserEffect,
    fetchChatMessagesEffect,
    listenToNewMessagesEffect
  )(action$, store$, dependencies).pipe(
    catchError((err) => {
      console.log(err);
      return of({
        type: "globalTypes.GLOBAL_ERROR",
      });
    })
  );
