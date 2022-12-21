import { useSelector } from "react-redux";

import { getMessages } from "../redux/chat/selectors";

export default () => {
  const messages = useSelector(getMessages);

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          {message.text} {message.username}
        </li>
      ))}
    </ul>
  );
};
