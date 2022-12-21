import { Observable } from "rxjs";

import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const BASE_REF = "users";

export const fetchUser = async (uid) => {
  return (
    (await firebase.database().ref(BASE_REF).child(uid).once("value")).val() ||
    {}
  );
};

export const listenAuthChange = () => {
  return new Observable((subscriber) => {
    firebase.auth().onAuthStateChanged(
      (user) => {
        subscriber.next(user);
      },
      (error) => {
        subscriber.error(error);
      }
    );
  });
};

export const signUpUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`);
  }
};

export const signInUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`);
  }
};

export const saveNewUser = async (user, username, password) => {
  try {
    return await firebase
      .database()
      .ref(BASE_REF)
      .child(user.uid)
      .set({
        uid: user.uid,
        email: user.email,
        username,
        password,
        ...user.metadata,
      });
  } catch (err) {
    console.log(err);
  }
};

export const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
