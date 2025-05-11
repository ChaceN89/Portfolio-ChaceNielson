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

import { useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Button.styles.css';
import { popEffect } from '../../utils/particleEffects';

export default function MyBtn({ children, callBack, sm}) {

  const particleRef = useRef(null);
  const particleBoxRef = useRef(null);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // trigger a particle effect
    popEffect({
      target: particleBoxRef.current,
      parent: particleRef.current,
      backgroundPulse: true,
      backgroundPulseColor: '#0000FF', // Hex for blue
      backgroundPulseDuration: 3000,
      particleCount: 10,
      particleColor: 'var(--color-tertiary)',
      particleSizeRange: {min: 2, max: 12},
      particleDuration: 3200,
    });
  
    setTimeout(() => {
      if (typeof callBack === 'function') callBack();
    }, 500);
  
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <button 
      disabled={clicked} 
      className={ `overflow-hidden lg-btn ${sm && "sm-btn"} ${clicked ? 'btn-clicked' : ''}`} 
      onClick={handleClick} 
      onMouseLeave={() => {
        if (!clicked) // Only unset if not in click animation
          setClicked(false); 
      }}
    >
      
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
        <span className="arrow-box" 
            ref={particleBoxRef}

        >
          <div ref={particleRef} className='h-full flex items-center'/>
          <FaArrowRight  className="arrow-icon" />
        </span>
      </span>
    </button>
  );
}
