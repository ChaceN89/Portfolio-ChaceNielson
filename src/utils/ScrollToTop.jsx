/**
 * @file ScrollToTop.js
 * @module ScrollToTop
 * @desc React component to automatically scroll the window to the top (0,0) whenever the route changes.
 * This component utilizes a useEffect hook to trigger the scroll action upon location pathname changes.
 * Intended to be placed in the App.js as <ScrollToTop /> to ensure all pages start at the top.
 * 
 * @component ScrollToTop
 * 
 * @requires react
 * @requires useEffect from 'react'
 * @requires useLocation from 'react-router-dom'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @example
 * // Example usage of ScrollToTop component in App.js
 * import ScrollToTop from './ScrollToTop';
 * 
 * function App() {
 *   return (
 *     <>
 *       <ScrollToTop />
 *      <Router>
 *     </>
 *   );
 * }
 * 
 * @exports ScrollToTop
 * 
 * @created 2022-10-27
 * @updated 2022-10-27
 * @author Chace Nielson
 * @since 2.1
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current location of Router

  useEffect(() => { // Call useEffect every time the pathname (location) changes
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]); // Activated when pathname changes

  return null; // Nothing to return in this function, it's just the useEffect
}
