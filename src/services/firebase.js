import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getMessages = (callback) => {
  return onSnapshot(
    query(collection(db, "messages"), orderBy("timestamp", "asc")),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    }
  );
};
