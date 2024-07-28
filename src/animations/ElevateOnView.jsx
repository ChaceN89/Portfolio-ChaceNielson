/**
 * @file ElevateOnView.jsx
 * @module ElevateOnView
 * @desc A wrapper component that applies a slide-up animation effect when the component comes into view.
 * This component uses Framer Motion for animations.
 * 
 * @component ElevateOnView
 * 
 * @requires react
 * @requires useRef, useEffect from 'react'
 * @requires framer-motion
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.framer.com/docs/ | Framer Motion Documentation}
 * 
 * @param {Object} children - The child components to be wrapped with the slide-up animation.
 * 
 * @returns {JSX.Element} The ElevateOnView component that wraps its children with a slide-up animation.
 * 
 * @example
 * // Example usage of ElevateOnView in a parent component
 * import ElevateOnView from './ElevateOnView';
 * 
 * <ElevateOnView>
 *   <YourComponent />
 * </ElevateOnView>
 * 
 * @exports ElevateOnView
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const elevationVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function ElevateOnView({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

  // Start the animation when the component comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={elevationVariants}
    >
      {children}
    </motion.div>
  );
}

export default ElevateOnView;
