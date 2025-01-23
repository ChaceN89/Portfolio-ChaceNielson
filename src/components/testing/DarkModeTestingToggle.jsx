/**
 * @file DarkModeTestingToggle.jsx
 * @module DarkModeTestingToggle
 * @description A development-only component for toggling between dark and light modes in the application.
 * This component checks the environment variable `NEXT_PUBLIC_ENVIRONMENT` to ensure it only renders in development mode.
 * It updates the `dark` class on the HTML root element to apply the appropriate theme styles.
 * 
 * @component DarkModeTestingToggle
 * 
 * @requires react
 * 
 * @example
 * // Example usage
 * <DarkModeTestingToggle />
 * 
 * @notes
 * - Adds or removes the `dark` class on the HTML root element (`<html>`).
 * - Only renders when `NEXT_PUBLIC_ENVIRONMENT` is set to 'development'.
 * - Displays a button in the top-right corner of the screen with icons for light mode (☀️) and dark mode (🌙).
 * 
 * @author Chace Nielson
 * @since 1.0
 * @created 2025-01-08
 * @updated 2025-01-08
 */
"use client";
import React, { useState, useEffect } from 'react';

function DarkModeTestingToggle() {
  // State to track the dark mode status
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if the environment variable indicates development mode
  const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development';

  // Update the dark mode class on the HTML root element
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    const html = document.documentElement;
    if (!isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  // Set the initial dark mode state based on the class on mount
  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  // Early return if not in development mode
  if (!isDevelopment) {
    return null;
  }

  return (
    <div
      onClick={toggleDarkMode}
      className={`cursor-pointer opacity-30 fixed top-0 right-0 m-1 p-1 z-[100] font-mono text-white h-10 w-10 rounded-full flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-700'
      }`}
    >
      <div className="">{isDarkMode ? '🌙' : '☀️'}</div>
    </div>
  );
}

export default DarkModeTestingToggle;
