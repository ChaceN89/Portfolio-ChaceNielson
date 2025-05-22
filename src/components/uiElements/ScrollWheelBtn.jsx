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
import { BsMouse } from 'react-icons/bs'; // Scroll wheel icon

// data
import { globals } from '../../data/globals';

export default function ScrollWheelBtn({ to = "about-me", extraDelay = 0 }) {
  const isTallEnough = useMediaQuery({ query: '(min-height: 400px)' });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  if (!isTallEnough) return null;

  const bounceProps = {
    initial: { y: 0 },
    animate: { y: [0, -20, 0] },
    transition: {
      duration: 2,
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatDelay: 1,
      ease: 'easeInOut',
    },
  };

  const fadeInProps = {
    initial: { opacity: 0 },
    animate: inView ? { opacity: 1 } : { opacity: 0 },
    transition: { delay: 2 + extraDelay, duration: 1.5 },
  };

  return (
    <div 
      ref={ref}
      className="hidden absolute inset-0 z-15 md:flex justify-center items-end pointer-events-none"
    >
      <motion.div className="mb-4 z-10 pointer-events-auto" {...fadeInProps}>
        <motion.div {...bounceProps}>
          <ScrollLink
            className="hover:cursor-pointer"
            to={to}
            spy={true}
            smooth={true}
            offset={globals.navbarHeight}
            duration={globals.scrollDuration}
          >
            <BsMouse className="opacity-50 rotate-180  hover:text-tertiary/60 hover:opacity-100 transition-all duration-300 text-4xl xl:text-5xl" />
          </ScrollLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
