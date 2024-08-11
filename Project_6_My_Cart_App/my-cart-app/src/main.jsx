import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

// Find the root element in your HTML
const rootElement = document.getElementById("root");

// Create a root for React to manage
const root = createRoot(rootElement);

// Render the App inside the AppProvider
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);