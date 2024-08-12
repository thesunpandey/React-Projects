import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new 'react-dom/client' for React 18+
import './index.css';
import App from './App';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
