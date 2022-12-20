import { Button } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../redux/auth/actions";
import { Input } from "antd";

const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = () => {
    if (!name) return;
    dispatch(login(name));
    navigate("/main");
  };

  return (
    <div className="loginContainer">
      <div className="form-container">
        <div className="wrapButtonSocial">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <Button onClick={onLogin} size="lg" outline color="primary">
            login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
