/**
 * @file MyButton.jsx
 * @module MyButton
 * @desc Reusable Button component that can function either as a ScrollLink or a standard button with an onClick event.
 * The component conditionally scrolls based on the presence of the 'to' prop. If 'to' is provided, it scrolls to the target;
 * otherwise, it triggers the onClick event. The styling is consistent using the 'buttonStyle' class from the CSS file.
 * 
 * @component MyButton
 * 
 * @requires react
 * @requires react-scroll
 * @requires ../../globals
 * 
 * @see {@link https://github.com/fisshy/react-scroll|react-scroll documentation}
 * @see {@link https://tailwindcss.com/docs/installation|Tailwind CSS documentation}
 * 
 * @param {Object} props - The props object.
 * @param {string} [props.to] - The target element to scroll to. If provided, the component scrolls to the element.
 * @param {function} [props.onClick] - The click event handler. Used when 'to' is not provided.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.className] - Additional custom classes for styling.
 * @param {string} [props.type='button'] - The type of the button, e.g., 'button', 'submit'.
 * @param {Object} [props.rest] - Additional props to be spread onto the rendered element.
 * 
 * @example
 * // As a ScrollLink:
 * <MyButton
 *   to="Projects"
 *   className="additional-class"
 * >
 *   My Projects
 * </MyButton>
 * 
 * // As a standard button:
 * <MyButton
 *   onClick={() => console.log('Button clicked!')}
 *   className="additional-class"
 * >
 *   Click Me
 * </MyButton>
 * 
 * @returns {JSX.Element} The rendered Button component.
 * 
 * @created 2024-07-17
 * @updated 2024-07-31
 * @since 2.1
 * 
 * @exports MyButton
 */

import React from 'react';
import handleClick from './handleClick';
import './Button.css';

/**
 * MyButton component
 *
 * @param {Object} props - The props object.
 * @param {string} [props.to] - The target element to scroll to. If provided, the component scrolls to the element.
 * @param {function} [props.onClick] - The click event handler. Used when 'to' is not provided.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.className] - Additional custom classes for styling.
 * @param {string} [props.type='button'] - The type of the button, e.g., 'button', 'submit'.
 * @param {Object} [props.rest] - Additional props to be spread onto the rendered element.
 * @returns {JSX.Element} The MyButton component.
 */
function MyButton({ to, onClick, aLink, children, className, type = 'button', ...rest }) {

  const handleButtonClick = (event) => {
    if (type === 'submit') {
      // Do not call handleClick if the button is a submit button to avoid preventing form submission
      if (onClick) onClick(event);
    } else {
      handleClick({ to, onClick, aLink, event });
    }
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
