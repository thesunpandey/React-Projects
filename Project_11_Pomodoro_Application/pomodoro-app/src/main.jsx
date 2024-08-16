import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import SettingsContextProvider from "./context/SettingsContext.jsx";

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the application
createRoot(rootElement).render(
  <StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </StrictMode>
);