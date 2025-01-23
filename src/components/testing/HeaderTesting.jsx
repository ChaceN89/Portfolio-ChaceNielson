/**
 * @file HeaderTesting.jsx
 * @module HeaderTesting
 * @description A React component designed to visually display and test typography styles for various header and paragraph elements.
 *
 * @component HeaderTesting
 * 
 * @requires react
 * 
 * @description
 * - This component provides a sample layout for testing and showcasing different typography styles defined in the application's global styles.
 * - Includes headers (h1 to h6) and a paragraph element with dummy text.
 * - Designed for development and debugging purposes, ensuring consistent application of global typography styles.
 * 
 * @example
 * <HeaderTesting />
 * 
 * @author Chace Nielson
 * @created 2025-01-08
 * @updated 2025-01-08
 */

import React from 'react';

function HeaderTesting() {
  return (
    <div className="p-10 space-y-2">
      <h1>Header 1: The Quick Brown Fox</h1>
      <h2>Header 2: Jumps Over the Lazy Dog</h2>
      <h3>Header 3: Lorem Ipsum Dolor Sit Amet</h3>
      <h4>Header 4: Consectetur Adipiscing Elit</h4>
      <h5>Header 5: Sed Do Eiusmod Tempor</h5>
      <h6>Header 6: Incididunt Ut Labore Et Dolore</h6>
      <p className="py-2">
        Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
}

export default HeaderTesting;
