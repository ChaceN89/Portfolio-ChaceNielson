/**
 * @file MyButton.jsx
 * @module MyButton
 * @desc Reusable button component that supports scrolling, navigation, and external links. 
 *       Handles React Router navigation, `react-scroll` scrolling, or external link redirection 
 *       based on provided props (`to`, `link`, `aLink`, or `onClick`).
 * 
 * @see {@link https://github.com/fisshy/react-scroll | react-scroll Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://tailwindcss.com/ | Tailwind CSS Documentation}
 * 
 * @example
 * // Scroll to an element:
 * <MyButton to="Projects">My Projects</MyButton>
 * 
 * // Navigate to a route:
 * <MyButton link="/about">About</MyButton>
 * 
 * // External link:
 * <MyButton aLink="https://example.com">Visit</MyButton>
 * 
 * @author Chace Nielson
 * @created Jul 17, 2024
 * @updated Jan 23, 2025
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Button.css';

/**
 * MyButton component
 *
 * @param {Object} props - The props object.
 * @param {string} [props.to] - Target element ID for scrolling.
 * @param {string} [props.link] - React Router navigation path.
 * @param {string} [props.aLink] - External link URL.
 * @param {function} [props.onClick] - Custom click event handler.
 * @param {React.ReactNode} props.children - Content inside the button.
 * @param {string} [props.className] - Custom classes for styling.
 * @param {string} [props.type='button'] - Button type ('button' or 'submit').
 * @param {Object} [props.rest] - Additional props to spread onto the button.
 * @returns {JSX.Element} The rendered MyButton component.
 */
function MyButton({ to, link, aLink, onClick, children, className, type = 'button', ...rest }) {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    if (type === 'submit') {
      if (onClick) onClick(event); // Trigger custom onClick for submit buttons
      return;
    }

    // Handle scrolling
    if (to) {
      event.preventDefault();
      ScrollLink.scrollTo(to, { smooth: true, duration: 1000 });
      return;
    }

    // Handle React Router navigation
    if (link) {
      event.preventDefault();
      navigate(link);
      return;
    }

    // Handle external links
    if (aLink) {
      event.preventDefault();
      window.open(aLink, '_blank');
      return;
    }

    // Trigger custom onClick handler if provided
    if (onClick) onClick(event);
  };

  return (
    <button
      type={type}
      className={`glow-on-hover border-faint ${className}`}
      onClick={handleButtonClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default MyButton;
