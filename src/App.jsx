import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Chat from "./components/ChatPage";
// import FirebaseListener from "./components/FirebaseListener";
import Entry from "./pages/Entry";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthListener from "./pages/AuthListener";
import { initApp } from "./redux/auth/actions";
import "./styles/app.scss";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, []);

  return (
    <BrowserRouter>
      {/* <FirebaseListener /> */}
      <AuthListener />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Layout />}>
          <Route index element={<div>Choose tab</div>} />
          {/* <Route path="chat" element={<Chat />} /> */}
        </Route>
        <Route path="*" element={<Entry />} />
      </Routes>
    </BrowserRouter>
  );
};
