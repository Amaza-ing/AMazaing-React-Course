import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProviderWrapper } from "./contexts/user.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <UserProviderWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProviderWrapper>
  // </React.StrictMode>,
);
