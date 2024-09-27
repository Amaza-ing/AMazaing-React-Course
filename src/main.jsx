import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProviderWrapper } from "./contexts/user.context.jsx";
import { BlogProviderWrapper } from "./contexts/blog.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BlogProviderWrapper>
    <UserProviderWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProviderWrapper>
  </BlogProviderWrapper>
  // </React.StrictMode>,
);
