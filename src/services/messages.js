import firebase from "firebase/compat/app";

import { Observable } from "rxjs";

const BASE_REF = "messages";

export const saveMessage = (message) => {
  firebase
    .database()
    .ref(BASE_REF)
    .push({ ...message, timeStamp: firebase.database.ServerValue.TIMESTAMP });
};

export const fetchChatMessages = async () => {
  return (await firebase.database().ref(BASE_REF).once("value")).val() || {};
};

export const listenNewMessages = () => {
  return new Observable((subscriber) => {
    const ref = firebase.database().ref(BASE_REF).limitToLast(1);
    const callbackFn = ref.on(
      "child_added",
      (snapshot) => subscriber.next({ [snapshot.key]: snapshot.val() }),
      (error) => subscriber.error(error)
    );
    return () => ref.off("child_added", callbackFn);
  });
};
