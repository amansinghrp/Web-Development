import { StrictMode } from 'react';              // Import StrictMode
import { createRoot } from 'react-dom/client';   // Import createRoot from react-dom
import App from './App.jsx';
import './index.css';

// Render the React App to the root div in the HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
