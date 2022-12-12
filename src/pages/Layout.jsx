import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import logoImg from "../styles/images/logo.jpg";

export default () => {
  return (
    <div className="layout">
      <header className="header">
        <NavLink to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
        <div className="divHello">Hello guest</div>
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
