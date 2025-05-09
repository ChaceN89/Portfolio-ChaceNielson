/**
 * @file MyButton.jsx
 * @module UI/MyButton
 * @desc A styled button component with hover effects and optional analytics tracking.
 *
 * @props {function} callBack - Function to call when the button is clicked.
 * @props {ReactNode} children - Button content.
 * @props {string} [className] - Additional class names to append.
 *
 * @example
 * <MyButton callBack={() => console.log("Clicked!")}>Click Me</MyButton>
 *
 * @created May 9, 2025
 */

import './Sm-Button.styles.css';
import './Lg-Button.styles.css';
import { FaArrowRight } from 'react-icons/fa';

export default function MyButton({ children, callBack, className = 'lg-btn' }) {
  const handleClick = () => {
    if (typeof callBack === 'function') callBack();
    // TODO: Add GA event tracking here
  };

  return (
    <button onClick={handleClick} className={className}>
      <span className="label">{children}</span>
      <span className="arrow-box">
        <FaArrowRight className="arrow-icon" />
      </span>
    </button>
  );
}
