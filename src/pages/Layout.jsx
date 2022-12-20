import React from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink, Outlet } from "react-router-dom";

import logoImg from "../styles/images/logo.jpg";

export default () => {
  const { name } = useSelector((state) => state.auth.user);
  if (!name) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="layout">
      <header className="header">
        <NavLink to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
        <div className="divHello">{name}</div>
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
