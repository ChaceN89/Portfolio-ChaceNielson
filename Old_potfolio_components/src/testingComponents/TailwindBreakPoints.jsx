/**
 * @file TailwindBreakPoints.jsx
 * @module TailwindBreakPoints
 * @desc Component that displays the current Tailwind CSS breakpoint.
 * This component is intended for development use to visually indicate the active Tailwind CSS breakpoint.
 * It shows an icon in the top left corner of the screen, with different background colors for each breakpoint.
 * The component only renders in development mode and does not appear in production.
 * 
 * @component TailwindBreakPoints
 * 
 * @requires react
 * 
 * @returns {JSX.Element|null} The rendered TailwindBreakPoints component or null in production.
 * 
 * @example
 * // Ensure the environment variable is set to development
 * process.env.REACT_APP_ENVIRONMENT = 'development';
 * 
 * // Include the TailwindBreakPoints component in your application
 * <TailwindBreakPoints />
 * 
 * @note The environment variable `REACT_APP_ENVIRONMENT` must be set to 'development' for this component to render.
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://tailwindcss.com/docs/responsive-design | Tailwind CSS Responsive Design Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated 2024-07-26
 * @since 2.1
 */

import React from 'react';

function TailwindBreakPoints() {
  // Check if the environment variable indicates development mode
  const isDevelopment = process.env.REACT_APP_ENVIRONMENT === 'development';

  if (!isDevelopment) {
    return null; // Do not render in production
  }

  return (
    <div className="opacity-100 fixed top-0 left-0 m-1 p-1 z-[100] font-mono text-white h-10 w-10 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-black">
      <div className="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
      <div className="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
    </div>
  );
}

export default TailwindBreakPoints;
