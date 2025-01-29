/**
 * @file InLineText.jsx
 * @module InLineText
 * @desc Contains reusable UI components for bold text and bold links.
 * 
 * @example
 * import { BoldSpan, BoldLink } from './UIComponents';
 * 
 * @exports BoldSpan
 * @exports BoldLink
 * 
 * @author Chace Nielson
 * @version 1.0
 * @created Jan 29, 2025
 */

import React from 'react';
import { Link } from 'react-router-dom';

// Reusable bold span component
export const BoldSpan = ({ children }) => <span className="font-bold">{children}</span>;

// Reusable bold link component
export const BoldLink = ({ children, to }) => ( 
  <Link className="font-bold text-accent-dark hover:underline" to={to}>
    {children}
  </Link>
);
