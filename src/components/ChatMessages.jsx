import { useSelector } from "react-redux";

export default () => {
  const messages = useSelector((state) => state.chat.messages);
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message.text}</li>
      ))}
    </ul>
  );
};
