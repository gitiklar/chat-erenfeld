import { Input } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { sendMessage } from "../services/firebase";

export default () => {
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.auth.user);

  const onSend = async () => {
    sendMessage(user, message);
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
