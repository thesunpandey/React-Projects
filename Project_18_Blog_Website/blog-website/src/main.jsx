/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./app/store";

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application wrapped with the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
