import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InViewProvider } from "./Components/Context/ViewContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <InViewProvider>
        <App />
      </InViewProvider>
  </React.StrictMode>
);
