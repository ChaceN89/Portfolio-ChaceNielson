/**
 * @file SelectArrow.jsx
 * @module SelectArrow
 * @desc Reusable arrow component for carousels. Pass in 'left' or 'right' as direction.
 *       Designed for use with react-multi-carousel.
 * 
 * @author Chace Nielson
 * @created May 23, 2025
 */

import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function SelectArrow({ direction = 'left', onClick }) {
  const isLeft = direction === 'left';
  const Icon = isLeft ? FaChevronLeft : FaChevronRight;

  const classes = `
    absolute top-1/2 transform -translate-y-1/2 z-10 p-2 
    bg-white/50 dark:bg-black/50 rounded-full 
    hover:bg-accent/80 cursor-pointer hover:scale-115 
    transition-all duration-200 ease-in-out
    group hover:scale-y-95
    ${isLeft ? 'left-4 hover:-translate-x-2' : 'right-4 hover:translate-x-2'}
  `;

  return (
    <button onClick={onClick} className={classes} aria-label={`Scroll ${direction}`}>
      <Icon className={`text-black dark:text-white transform-all duration-200 ease-in-out ${isLeft ? "group-hover:-translate-x-1.5":"group-hover:translate-x-1.5"}`} size={20} />
    </button>
  );
}
