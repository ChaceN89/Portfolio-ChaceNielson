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

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Sm-Button.styles.css';
import './Lg-Button.styles.css';

export default function MyBtn({ children, callBack, className = 'lg-btn' }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      if (typeof callBack === 'function') callBack();
    }, 700);
  };

  return (
    <button className={`${className} ${clicked ? 'clicked' : ''}`} onClick={handleClick} onMouseLeave={() => setClicked(false)}>
      <h6 className="label">{children}</h6>
      <span className='arrow-box-container'>
        <span className="arrow-box">
          <FaArrowRight size={20} className="arrow-icon" />
      </span>
      </span>
    </button>
  );
}
