/**
 * @file ColorBoxes.jsx
 * @module ColorBoxes
 * @desc React component to display a palette of theme colors using Tailwind CSS classes.
 * This component renders a set of color boxes to visually test the Tailwind theme colors.
 *
 * @component ColorBoxes
 * 
 * @requires react
 * @requires tailwindcss
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://tailwindcss.com/docs | Tailwind CSS Documentation}
 * 
 * @returns {JSX.Element} The rendered ColorBoxes component.
 * 
 * @example
 * <ColorBoxes />
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated 2024-07-26
 * @since 2.1
 */

import React from 'react';

const ColorBoxes = () => {
  const colors = [
    { name: 'Primary', className: 'bg-primary hover:bg-primary-dark' },
    { name: 'Primary Dark', className: 'bg-primary-dark hover:bg-primary' },
    { name: 'Secondary', className: 'bg-secondary hover:bg-secondary-dark' },
    { name: 'Secondary Dark', className: 'bg-secondary-dark hover:bg-secondary' },
    { name: 'Accent', className: 'bg-accent hover:bg-accent-dark' },
    { name: 'Accent Dark', className: 'bg-accent-dark hover:bg-accent' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Color Palette</h2>
      <div className="grid grid-cols-2 gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`p-4 ${color.className} text-center transition duration-300 ease-in-out transform`}
          >
            <p className={color.className.includes('bg-secondary') ? 'text-black' : 'text-white'}>
              {color.name}
            </p>
            <p className={`text-sm ${color.className.includes('bg-secondary') ? 'text-black' : 'text-white'}`}>
              {color.className.split(' ')[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorBoxes;
