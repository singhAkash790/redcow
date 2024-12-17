import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AlerterProvider } from "./Context/AlerterContext";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AlerterProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AlerterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
