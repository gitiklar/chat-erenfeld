import { Input } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSendMessage } from "../../redux/chat/slice";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default () => {
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const onSend = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        uid: user.uid,
        name: user.name,
        text: message.trim(),
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }

    dispatch(onSendMessage({ text: message, uid: user.uid, name: user.name }));
    setMessage("");
  };

  return (
    <div>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />
    </div>
  );
};
