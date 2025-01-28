/**
 * @file Magnetic.jsx
 * @module Magnetic
 * @desc React component that creates a magnetic effect on its children elements, making them move slightly based on the mouse position within a defined padding area.
 * This component is designed to add a subtle interactive effect to UI elements, enhancing the user experience.
 * 
 * effect is disabled on small screens (width < 640px) to prevent performance issues and improve usability.
 *
 * @component Magnetic
 * 
 * @requires react
 * @requires useState, useRef, useEffect from 'react'
 * 
 * @example
 * // Example usage of Magnetic component
 * import Magnetic from './Magnetic';
 * 
 * function App() {
 *   return (
 *     <Magnetic padding={20}>
 *       <button>Hover over me!</button>
 *     </Magnetic>
 *   );
 * }
 * 
 * @param {Object} props - The properties passed to the Magnetic component.
 * @param {ReactNode} props.children - The child elements to apply the magnetic effect to.
 * @param {number} [props.padding=10] - The padding area around the element where the magnetic effect will be triggered.
 * @param {boolean} [props.disabled=false] - If true, the magnetic effect is disabled.
 * 
 * @returns {JSX.Element} The Magnetic component wrapping its children with the magnetic effect.
 * 
 * @exports Magnetic
 * 
 * @author Chace Nielson
 * @created 2024-08-14
 * @updated 2024-08-14
 * @since 2.1
 */
import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

function Magnetic({ children, padding = 10, disabled = false }) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  const isSmallScreen = useMediaQuery({ maxWidth: '639px' }); // Tailwind's 'sm' breakpoint

  useEffect(() => {
    if (disabled || isSmallScreen) {
      // Reset position when disabled or on small screens
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (magnetRef.current) {
        const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);

        // Check if the mouse is within the padding area
        if (distX < width / 2 + padding && distY < height / 2 + padding) {
          setIsActive(true);
          // Calculate the offset
          const offsetX = (e.clientX - centerX) / 2;
          const offsetY = (e.clientY - centerY) / 2;
          setPosition({ x: offsetX, y: offsetY });
        } else {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    // Attach mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, isSmallScreen]);

  if (isSmallScreen || disabled) {
    return <>{children}</>;
  }

  return (
    <div ref={magnetRef} style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? "transform 0.3s ease-out" : "transform 0.5s ease-in-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Magnetic;
