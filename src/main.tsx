// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index.tsx";
import "./assets/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
