/**
 * @file ElevateOnView.jsx
 * @module ElevateOnView
 * @desc A wrapper component that applies a slide-up animation effect when the component comes into view.
 * This component uses Framer Motion for animations to raise up the children of this item as it comes into view.
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
 * @param {Object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The child components to be wrapped with the slide-up animation.
 * @param {number} [props.duration=0.5] - Duration of the animation in seconds.
 * @param {string} [props.marginY='-150px'] - Margin to trigger the animation.
 * @param {number} [props.yPos=100] - Y-axis starting position for the animation.
 * @param {string} [props.className=''] - Additional CSS classes for the motion div.
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
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

/**
 * ElevateOnView component
 *
 * @param {Object} props - The properties for the component.
 * @param {React.ReactNode} props.children - The child components to be wrapped with the slide-up animation.
 * @param {number} [props.duration=0.5] - Duration of the animation in seconds.
 * @param {string} [props.marginY='-150px'] - Margin to trigger the animation.
 * @param {number} [props.yPos=100] - Y-axis starting position for the animation.
 * @param {string} [props.className=''] - Additional CSS classes for the motion div.
 * @returns {JSX.Element} The ElevateOnView component.
 */
function ElevateOnView({ children, duration = 0.5, marginY = '-150px', yPos = 100, className='' }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: `0px 0px ${marginY} 0px` });

  const elevationVariants = {
    hidden: {
      y: yPos,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: duration,
        ease: 'easeOut',
      },
    },
  };

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
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ElevateOnView;
