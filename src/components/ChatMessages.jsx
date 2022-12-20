import { useSelector } from "react-redux";

export default () => {
  const messages = useSelector((state) => state.chat.messages);
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          {message.text} {message.name}
        </li>
      ))}
    </ul>
  );
};
