/**
 * @file main.jsx
 * @author Chace Nielson
 * 
 * @description Entry point for the React application.
 * This file sets up the React application, imports global styles, and renders the main App component.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import all Global CSS styles
import './index.css'

// Import the main App component
import App from './App.jsx'

// Suppress specific warning about defaultProps for the "ProjectImageCarousel" specifically
const consoleError = console.error;
console.error = (message, ...args) => {
  if (!message.includes("Support for defaultProps will be removed from function components in a future major release")) {
    consoleError(message, ...args);
  }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
