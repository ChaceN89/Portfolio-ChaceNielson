/**
 * @file DarkModeButton.jsx
 * @module DarkModeButton
 * @description A reusable toggle button for manually switching between light and dark mode.
 * This component adds or removes the `.dark` class on the `<html>` element to control the site theme.
 *
 * @notes
 * - This setup requires Tailwind v4 with the following in your `index.css`:
 *   @import "tailwindcss";
 *   @custom-variant dark (&:where(.dark, .dark *));
 *
 * - Make sure you do NOT rely on `prefers-color-scheme` for this mode — this is a **manual override system**.
 * - Use Tailwind utilities like `bg-primary dark:bg-secondary` to support this theme toggle.
 *
 * @example
 * <DarkModeButton />
 * 
 * @author Chace Nielson
 * @created May 20, 2025
 * @updated May 20, 2025
 */

import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Tooltip from '../uiElements/Tooltip';

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle logic for adding/removing the .dark class on <html>
  const toggleDarkMode = () => {
    document.body.classList.add('changing-theme');
    setTimeout(() => {
      document.body.classList.remove('changing-theme');
    }, 150);

    setIsDarkMode(prev => {
      document.documentElement.classList.toggle('dark', !prev);
      return !prev;
    });
  };

  // Set initial state on mount
  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <Tooltip text={isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"} openDuration={1200}>
    <button
      onClick={toggleDarkMode}
      className={`
        text-xl p-2 rounded-full 
        hover:bg-secondary/50 dark:hover:bg-primary/50
        cursor-pointer 
      `}
      title="Toggle Dark Mode"
    >
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </button>
    </Tooltip>
  );
}
