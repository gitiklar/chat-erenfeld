import {
  catchError,
  filter,
  mergeMap,
  repeat,
  takeUntil,
} from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";

import {
  fetchChatMessagesSuccessfully,
  fetchChatMessagesFailed,
} from "./actions";

import { fetchChatMessages, listenNewMessages } from "../../services/messages";
import * as AuthTypes from "../auth/actionTypes";
import * as types from "./actionTypes";
import { getLastMessageId } from "./selectors";

export const fetchChatMessagesEffect = (action$, store) =>
  action$.pipe(
    ofType(AuthTypes.AUTH_LOGGED_IN),
    mergeMap(async () => {
      try {
        const messages = await fetchChatMessages();
        return fetchChatMessagesSuccessfully(messages);
      } catch (error) {
        return fetchChatMessagesFailed();
      }
    })
  );

export const listenToNewMessagesEffect = (action$, store) =>
  action$.pipe(
    ofType(types.CHAT_FETCH_MESSAGES_SUCCESSFULLY),
    mergeMap(() => {
      return listenNewMessages().pipe(
        filter((message) => {
          const state = store.value;
          const lastMessageId = getLastMessageId(state);
          return lastMessageId !== Object.keys(message)[0];
        }),
        mergeMap((message) => {
          return of({
            type: types.CHAT_MESSAGES_ADDED,
            payload: message,
          });
        })
      );
    }),
    takeUntil(action$.pipe(ofType(AuthTypes.AUTH_LOG_OUT))),
    catchError((error) => {
      return of({
        type: types.CHAT_MESSAGES_ADDED_ERROR,
        payload: error?.message,
      });
    }),
    repeat()
  );
