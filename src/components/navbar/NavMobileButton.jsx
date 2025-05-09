/**
 * @file NavMobileButton.jsx
 * @module NavMobileButton
 * @desc React component for the mobile navigation toggle button.
 *       Toggles the visibility of the mobile navigation menu with animated icon transitions.
 *
 * @features
 * - Displays a hamburger icon (`HiBars3BottomRight`) when the menu is closed.
 * - Displays a close icon (`HiX`) when the menu is open.
 * - Smooth icon scaling and color transition on hover.
 * - Hidden on large screens (`lg:hidden`) and styled for visual clarity with `z-45`.
 * - Calls parent handler to toggle `isMobileMenuOpen` state.
 *
 * @author Chace Nielson
 * @created May 9, 2025
 * @updated May 9, 2025
 */
import React from 'react'
import { HiX } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'

export default function NavMobileButton({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) {
  return (
    <button
      className="flex items-center lg:hidden hover:cursor-pointer z-45"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? (
        <HiX className="text-white w-6 h-6 transition-transform duration-200 hover:text-accent hover:scale-125 my-drop-shadow" />
      ) : (
        <HiBars3BottomRight className="text-white w-6 h-6 transition-transform duration-200 hover:text-accent hover:scale-125 my-drop-shadow" />
      )}
    </button>
  )
}
