import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/global.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
