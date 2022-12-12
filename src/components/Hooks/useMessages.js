import { useEffect, useState } from "react";
import { getMessages } from "../../services/firebase";

export default () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const unsubscribe = getMessages(setMessages);
    return unsubscribe;
  }, []);
  return messages;
};
