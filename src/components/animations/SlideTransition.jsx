/**
 * @file SlideTransition.jsx
 * @module SlideTransition
 * @desc A React component that provides sliding transition effects for route changes using Framer Motion.
 *       Supports customizable direction, duration, delay, and translation distance.
 * 
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the transition.
 * @param {string} [props.enter='left'] - The direction from which the component enters ('left' or 'right').
 * @param {string} [props.exit='left'] - The direction to which the component exits ('left' or 'right').
 * @param {number} [props.duration=0.3] - The duration of the slide animation in seconds.
 * @param {number} [props.delay=0.1] - The delay before the animation starts in seconds.
 * @param {number} [props.translationDist=100] - The translation distance for the slide effect in pixels.
 * @param {string} [props.className=''] - Optional CSS class for custom styling.
 * 
 * @author Chace Nielson
 * @created Jul 28, 2024
 * @updated Jan 23, 2025
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const SlideTransition = ({ 
  children,
  enter = 'left', 
  exit = 'left', 
  duration = 0.3, 
  delay = 0.1, 
  translationDist = 100,
  className=''
}) => {

  const location = useLocation(); // Get the current location from the router

  const movX = translationDist; // Set the x-axis translation distance

  // Set the variants for the animation for when the component is hidden, entering, and exiting
  const variants = {
    hidden: { opacity: 0, x: enter === 'left' ? -1 * movX : movX },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: exit === 'left' ? -1 * movX : movX }, // Adjusted the exit position
  };

  // Set the transition for the animation
  const transition = {
    type: 'tween', 
    duration: duration,
    ease: 'easeInOut', // Options: easeIn, easeOut, easeInOut
    delay: delay,
  };

  // Return the SlideTransition Wrapper
  return (
    <motion.div
      key={location.pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={transition}
      className={className}
      onClick={(e) => e.stopPropagation()}
    >
      {children} 
      {/* is in a react fragment so flex doens't work - need a inner class to handle more specific CSS */}
    </motion.div>
  );
};

export default SlideTransition;
