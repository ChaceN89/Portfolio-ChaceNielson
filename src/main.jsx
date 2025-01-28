import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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
