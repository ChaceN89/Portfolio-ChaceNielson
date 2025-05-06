/**
 * @file HexLoader.jsx
 * @module HexLoader
 * @desc Displays a row of animated hexagons for loading indicators. 
 *       Each hex rotates sequentially to create a conveyor-style animation.
 *       Animation can be toggled via the `animate` prop.
 *
 * @author Chace Nielson
 * @created May 5, 2025
 * @updated May 5, 2025 by Chace Nielson
 */
import React from 'react'
import './HexLoader.styles.css'; // Import the CSS file for hexagon styles

export default function HexLoader({ animate = true }) {
  return (
    <span className="hex-loader">
      <span className={`hex hex1 ${animate && "animate"} `} />
      <span className={`hex hex2 ${animate && "animate"}`} />
      <span className={`hex hex3 ${animate && "animate"}`} />
      <span className={`hex hex4 ${animate && "animate"}`} />
    </span>
  );
}