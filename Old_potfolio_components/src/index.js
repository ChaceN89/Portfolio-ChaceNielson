/**
 * @file index.js
 * @desc The entry point for the React application.
 * This file renders the AppWithRouter component inside the root element of the HTML file.
 * It also includes the reportWebVitals function for performance measurement.
 * 
 * @requires react
 * @requires react-dom/client
 * @requires ./index.css
 * @requires ./AppWithRouter
 * @requires ./reportWebVitals
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactjs.org/docs/react-dom.html | ReactDOM Documentation}
 * 
 * @example
 * // Example usage of index.js
 * // Ensure the HTML file has a root element with id 'root'
 * <div id="root"></div>
 * 
 * @created 2024-07-26
 * @updated 2024-07-28
 * @author Chace Nielson
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWithRouter from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
