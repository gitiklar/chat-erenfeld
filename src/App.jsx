import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chat from "./components/ChatPage";
import FirebaseListener from "./components/FirebaseListener";
import Entry from "./pages/Entry";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import store from "./redux/store";
import "./styles/app.scss";

export default () => {
  return (
    <Provider store={store}>
      <FirebaseListener />
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Layout />}>
            <Route index element={<div>Choose tab</div>} />
            <Route path="chat" element={<Chat />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Entry />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
