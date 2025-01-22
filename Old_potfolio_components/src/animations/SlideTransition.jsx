/**
 * @file SlideTransition.jsx
 * @module SlideTransition
 * @desc React component that provides a sliding transition effect for route changes.
 * This component uses the framer-motion library to create smooth slide-in and slide-out animations.
 * The slide direction, duration, delay, and translation distance are customizable through props.
 *
 * @component SlideTransition
 * 
 * @requires react
 * @requires motion from 'framer-motion'
 * @requires useLocation from 'react-router-dom'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
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
 * 
 * @returns {JSX.Element} The SlideTransition component that wraps its children with a slide animation.
 * 
 * @example
 * // Example usage of SlideTransition component
 * import SlideTransition from './SlideTransition';
 * 
 * function App() {
 *   return (
 *     <SlideTransition enter="left" exit="right" duration={0.5}>
 *       <YourComponent />
 *     </SlideTransition>
 *   );
 * }
 * 
 * @exports SlideTransition
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * SlideTransition component
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the transition.
 * @param {string} [props.enter='left'] - The direction from which the component enters ('left' or 'right').
 * @param {string} [props.exit='left'] - The direction to which the component exits ('left' or 'right').
 * @param {number} [props.duration=0.3] - The duration of the slide animation in seconds.
 * @param {number} [props.delay=0.1] - The delay before the animation starts in seconds.
 * @param {number} [props.translationDist=100] - The translation distance for the slide effect in pixels.
 * @returns {JSX.Element} The SlideTransition component.
 */
const SlideTransition = ({ 
  children,
  enter = 'left', 
  exit = 'left', 
  duration = 0.3, 
  delay = 0.1, 
  translationDist = 100  
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
    >
      {children}
    </motion.div>
  );
};

export default SlideTransition;
