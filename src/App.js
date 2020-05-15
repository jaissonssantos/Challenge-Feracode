import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { ToastContainer, toast } from 'react-toastify';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/import.css";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer />
      <Header />
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
