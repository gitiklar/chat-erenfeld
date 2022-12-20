import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { updateMessages } from "../redux/chat/slice";
import { getMessages } from "../services/messages";

export default () => {
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = getMessages(setMessages);
    return unsubscribe;
  }, []);

  useEffect(() => {
    dispatch(updateMessages(messages));
  }, [messages]);

  return <></>;
};
