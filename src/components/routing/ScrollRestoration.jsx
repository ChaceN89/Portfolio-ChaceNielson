/**
 * @file ScrollRestoration.js
 * @module ScrollRestoration
 * @desc Smart scroll restoration: scrolls to top on new page loads, restores scroll on browser back/forward.
 *
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated Mar 27, 2025
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollRestoration() {
  const { pathname } = useLocation(); // Get the current location of Router

  useEffect(() => { // Call useEffect every time the pathname (location) changes
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]); // Activated when pathname changes

  return null;
}
