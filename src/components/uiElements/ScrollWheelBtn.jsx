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
// Libraries
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';
import { useInView } from 'react-intersection-observer';


// data
import { globals } from '../../data/globals';

export default function ScrollWheelBtn({ to = "about-me" }) {
  // Check if the screen height is greater than 400px
  const isTallEnough = useMediaQuery({ query: '(min-height: 400px)' });

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 }); 

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
    animate: inView ? { opacity: 1 } : { opacity: 0 },
    transition: { delay: 5, duration: 1 }, // Delay and duration for fade-in
  };

  return (
    <div 
      ref={ref}
      className="hidden absolute inset-0 z-15 md:flex justify-center items-end pointer-events-none"
    >
      
      {/* Scroll button content */}
      <motion.div className="mb-4 z-10 pointer-events-auto" {...fadeInProps}>
        <motion.div {...bounceProps}>
          <ScrollLink
            className="hover:cursor-pointer my-drop-shadow"
            to={to}
            spy={true}
            smooth={true}
            offset={globals.navbarHeight}
            duration={globals.scrollDuration}
          >
            <img
              src='/icons/site-icons/scroll.png'
              className="h-12 lg:h-14 xl:h-16 hover:scale-110 opacity-45 hover:opacity-75 cursor-s-resize"
            />
          </ScrollLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
