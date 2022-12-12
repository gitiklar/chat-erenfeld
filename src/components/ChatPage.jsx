import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import "../firebaseConfig";

export default () => {
  
  return (
    <div>
      <p>Chat Page</p>
      <ChatInput />
      <ChatMessages />
    </div>
  );
};
