/**
 * @file Tooltip.jsx
 * @module Tooltip
 * @desc React component that displays a tooltip with a given text when the user hovers over the children elements.
 * The tooltip position adjusts based on the viewport boundaries to ensure it is fully visible.
 * 
 * @note The tooltip is rendered using createPortal to ensure it is displayed above all other elements.
 * in the index.html file, a div with the id 'tooltip-root' is required to render the tooltip.
 * @forexample 
 * <body>
 *  <noscript>You need to enable JavaScript to run this app.</noscript>
 *  <div id="root"></div>
 *  <div id="tooltip-root"></div> <!-- Add this line -->
 * </body>
 * 
 * @component Tooltip
 * 
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display inside the tooltip.
 * @param {number} [props.openDuration=1000] - The duration in milliseconds before the tooltip appears.
 * @param {string} [props.className=""] - Additional class names to style the tooltip.
 * @param {React.ReactNode} props.children - The child elements that trigger the tooltip on hover.
 * 
 * @requires react
 * @requires useState, useEffect, useRef from 'react'
 * @requires createPortal from 'react-dom'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * 
 * @returns {JSX.Element} The Tooltip component that displays a styled tooltip on hover.
 * 
 * @example
 * // Example usage of Tooltip component
 * import Tooltip from './Tooltip';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       // Other components
 *       <Tooltip text="This is a tooltip">
 *         <button>Hover over me</button>
 *       </Tooltip>
 *     </div>
 *   );
 * }
 * 
 * @exports Tooltip
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-08-05
 */

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Tooltip = ({ text, openDuration = 1000, className = "", children }) => {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({ left: 0, top: 0, visibility: 'hidden' });
  const tooltipRef = useRef(null);
  const tooltipRoot = document.getElementById('tooltip-root');

  // Function to handle mouse movement and set tooltip position
  const handleMouseMove = (event) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const tooltipRect = tooltipRef.current?.getBoundingClientRect() || { width: 0, height: 0 };
    let newStyle = {
      left: event.clientX + 15, // Offset tooltip by 10px
      top: event.clientY - 25,
      visibility: showTooltip ? 'visible' : 'hidden', // Set visibility based on showTooltip
    };

    // Adjust for viewport boundaries
    if (newStyle.left + tooltipRect.width > viewportWidth) {
      newStyle.left = event.clientX - tooltipRect.width - 10;
    }
    if (newStyle.top + tooltipRect.height > viewportHeight) {
      newStyle.top = event.clientY - tooltipRect.height - 10;
    }

    setTooltipStyle(newStyle);
  };

  // Effect to handle the tooltip visibility based on hover state
  useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        setTooltipStyle((prevStyle) => ({ ...prevStyle, visibility: 'visible' }));
      }, openDuration);
      return () => clearTimeout(timer);
    } else {
      setShowTooltip(false);
      setTooltipStyle((prevStyle) => ({ ...prevStyle, visibility: 'hidden' }));
    }
  }, [hovered, openDuration]);

  return (
    <div
      className="relative"
      onMouseEnter={(event) => {
        setHovered(true);
        handleMouseMove(event); // Initial position calculation
      }}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {createPortal(
        <div
          ref={tooltipRef}
          className={`fixed p-1 text-sm text-secondary bg-frosted-glass border rounded-lg w-fit whitespace-nowrap ${className}`}
          style={{ ...tooltipStyle, zIndex: 9999 }}
        >
          {text}
        </div>,
        tooltipRoot
      )}
    </div>
  );
};

export default Tooltip;
