import { Input } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getLoggedInFirebaseUser } from "../redux/auth/selectors";
import { saveMessage } from "../services/messages";

export default () => {
  const [message, setMessage] = useState("");
  const user = useSelector(getLoggedInFirebaseUser);

  const onSend = async () => {
    saveMessage({ text: message, uid: user.uid, username: user.username });
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
