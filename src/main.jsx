// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritesProvider } from "./context/ContextCart";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FavoritesProvider>
);
