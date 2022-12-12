import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Todos from "./components/Todos/TodosPage";
import Chat from "./components/Chat/ChatPage";
import Entry from "./pages/Entry";
import Layout from "./pages/Layout";
import store from "./redux/store";
import "./styles/app.scss";

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Layout />}>
            <Route index element={<div>Choose tab</div>} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="todos" element={<Todos />} />
            <Route path="chat" element={<Chat />} />
          </Route>
          <Route path="*" element={<Entry />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
