import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBZLYpohH5L-p3QF2imkJREaywbbE_6aiI",
  authDomain: "chat-erenfeld.firebaseapp.com",
  projectId: "chat-erenfeld",
  storageBucket: "chat-erenfeld.appspot.com",
  messagingSenderId: "749455099452",
  appId: "1:749455099452:web:a2c677497185011d26e539",
  measurementId: "G-KXRFQQGBQ0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
