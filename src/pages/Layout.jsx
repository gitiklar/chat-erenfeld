import React from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink, Outlet } from "react-router-dom";

import {
  getIsUserLoggedIn,
  getLoggedInFirebaseUser,
} from "../redux/auth/selectors";
import logoImg from "../styles/images/logo.jpg";

export default () => {
  const isUserLoggedIn = useSelector(getIsUserLoggedIn);
  const { username } = useSelector(getLoggedInFirebaseUser);

  if (!isUserLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="layout">
      <header className="header">
        <NavLink to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
        <div className="divHello">{username}</div>
      </header>
      <div className="heading">
        <div className="menuLine">
          <NavLink to="/">Back to entry</NavLink>
          <NavLink to="chat">Chat</NavLink>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
