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

export default function MyBtn({ children, callBack, sm}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      if (typeof callBack === 'function') callBack();
      setClicked(false);
    }, 1000);
  };

  const className = sm ? 'sm-btn' : '';

  return (
    <button disabled={clicked} className={ `overflow-hidden lg-btn ${className} ${clicked ? 'lg-btn-clicked' : ''}`} onClick={handleClick} onMouseLeave={() => setClicked(false)}>
      
      {/* SVG Filter for Noise */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          filter: "url(#noiseFilter)",
          mixBlendMode: "multiply",
          opacity: 0.6,
        }}
      />


      <h6 className="label">{children}</h6>
      <span className='arrow-box-container'>
        <span className="arrow-box">
          <FaArrowRight size={24} className="arrow-icon" />
        </span>
      </span>
    </button>
  );
}
