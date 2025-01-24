/**
 * @file DisplayTesting.jsx
 * @module DisplayTesting
 * @description A React component that conditionally renders development-only testing components.
 * This component checks the `VITE_ENVIRONMENT` environment variable to ensure it only renders in development mode.
 * It includes components for testing purposes, such as `TailwindBreakPoints` and `DarkModeTestingToggle`.
 * 
 * @notes
 * - This component ensures the `TailwindBreakPoints` and `DarkModeTestingToggle` components are only visible in development mode.
 * - Checks the `VITE_ENVIRONMENT` environment variable for the value `development`.
 * 
 * @author Chace Nielson
 * @since 1.0
 * @created 2025-01-22
 * @updated 2025-01-22
 */
import React from 'react'
import TailwindBreakPoints from './TailwindBreakPoints'
import DarkModeTestingToggle from './DarkModeTestingToggle'
// import HeaderTesting from './HeaderTesting';
// import ColorBoxes from './ColorBoxes';
import IconList from './IconList';

export default function DisplayTesting() {
  // Check if the environment is development
  const isDevelopment = import.meta.env.VITE_ENVIRONMENT === 'development';

  // Render children only if in development mode
  if (!isDevelopment) return null;

  return (
    <>
      <TailwindBreakPoints/>
      {/* <DarkModeTestingToggle/> */}
      {/* <HeaderTesting/> */}
      {/* <ColorBoxes/> */}
      <IconList/>
    </>
  )
}
