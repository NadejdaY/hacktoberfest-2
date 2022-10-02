import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "normalize-css-ultimate/normalize-ultimate.css";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/Context";

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
