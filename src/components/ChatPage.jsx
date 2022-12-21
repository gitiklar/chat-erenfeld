import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import "../firebaseConfig";

export default () => {
  return (
    <div>
      <ChatMessages />
      <ChatInput />
    </div>
  );
};
