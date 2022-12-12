import { useSelector } from "react-redux";
import useMessages from "../Hooks/useMessages";

export default () => {
  const messages = useMessages(); // useSelector((state) => state.chat.messages);
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message.text}</li>
      ))}
    </ul>
  );
};
