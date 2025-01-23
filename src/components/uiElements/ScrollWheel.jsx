/**
 * @file ScrollWheel.jsx
 * @module ScrollWheel
 * @desc React component that provides a scroll wheel animation to prompt users to scroll down.
 * This component uses Framer Motion for animation and react-scroll for smooth scrolling functionality.
 * It only renders if the screen height is greater than 400px.
 * 
 * @component ScrollWheel
 * 
 * @requires react
 * @requires framer-motion { motion }
 * @requires react-responsive { useMediaQuery }
 * @requires globals from '../../data/globals'
 * @requires react-scroll { Link as ScrollLink }
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.framer.com/docs/ | Framer Motion Documentation}
 * @see {@link https://github.com/contra/react-responsive | React Responsive Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.to="CallToAction"] - The target element to scroll to.
 * 
 * @returns {JSX.Element|null} The ScrollWheel component that prompts users to scroll down, or null if the screen height is less than 400px.
 * 
 * @example
 * // Example usage of ScrollWheel component
 * import ScrollWheel from './ScrollWheel';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       // Other components 
 *       <ScrollWheel />
 *     </div>
 *   );
 * }
 * 
 * @exports ScrollWheel
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { globals } from '../../data/globals';
import { Link as ScrollLink } from 'react-scroll';
import ImageComponent from '../../wrappers/ImageComponent';

/**
 * ScrollWheel component
 *
 * @param {Object} props - The component props.
 * @param {string} [props.to="CallToAction"] - The target element to scroll to.
 * @returns {JSX.Element|null} The ScrollWheel component or null if the screen height is less than 400px.
 */
function ScrollWheel({ to = "CallToAction" }) {
  // Check if the screen height is greater than 400px
  const isTallEnough = useMediaQuery({ query: '(min-height: 400px)' });

  // Only render the component if the screen height is greater than 400px
  if (!isTallEnough) {
    return null;
  }

  const bounceProps = {
    initial: { y: 0 }, // Initial position
    animate: { y: [0, -20, 0] }, // Keyframes for the bouncing effect
    transition: {
      duration: 2, // Duration of the animation
      times: [0, 0.5, 1], // Timing for each keyframe
      repeat: Infinity, // Repeat the animation indefinitely
      repeatDelay: 1, // Delay before repeating the animation
      ease: 'easeInOut', // Easing function
    },
  };

  const fadeInProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 2, duration: 1 }, // Delay and duration for fade-in
  };

  return (
    <div className="hidden absolute inset-0 z-15 md:flex justify-center items-end pointer-events-none">
      {/* Transparent background */}
      <div className="absolute inset-0 z-0 bg-secondary opacity-0 pointer-events-none" />
      
      {/* Scroll button content */}
      <motion.div className="mb-4 z-10 pointer-events-auto" {...fadeInProps}>
        <motion.div {...bounceProps}>
          <ScrollLink
            className="hover:cursor-pointer"
            to={to}
            spy={true}
            smooth={true}
            offset={globals.ScrollLink.offset}
            duration={globals.ScrollLink.duration}
          >
            <ImageComponent
              src={`${process.env.PUBLIC_URL}/png-icons/scroll.png`}
              alt="Scroll"
              className="h-12 lg:h-14 xl:h-16 hover:scale-110 opacity-45 hover:opacity-75 cursor-s-resize"
            />
          </ScrollLink>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ScrollWheel;
