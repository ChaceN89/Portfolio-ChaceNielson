/**
 * @file CallToAction.jsx
 * @module CallToAction
 * @desc React component that implements a call-to-action section with a background image, inner content, and animations.
 * The component uses Framer Motion to add parallax effects and smooth animations. The parallax effect is disabled on small screens
 * (when the screen width is less than 768px or the height is less than 600px) to improve performance and usability.
 *
 * @component CallToAction
 * 
 * @requires React
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires InnerCallToAction from './InnerCallToAction'
 * @requires motion, useScroll, useTransform from 'framer-motion'
 * @requires useMediaQuery from 'react-responsive'
 * @requires './CallToAction.css'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * @see {@link https://github.com/yocontra/react-responsive | React Responsive Documentation}
 * 
 * @example
 * // Example usage of CallToAction component
 * import CallToAction from './CallToAction';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <CallToAction />
 *     </div>
 *   );
 * }
 * 
 * @exports CallToAction
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-21
 * @since 2.1
 * 
 * @changelog
 * - Added a parallax effect using Framer Motion, which moves the inner content vertically as the user scrolls.
 * - Disabled the parallax effect on small screens (width < 768px or height < 600px) to enhance performance and usability.
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// components
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import InnerCallToAction from './InnerCallToAction';

// data and styles
import './CallToAction.css';

// Define the scroll ranges and translation values for the parallax effect - set up the configuration 
const scrollStart = 0;
const scrollMiddle = window.innerHeight;
const scrollEnd = 2 * window.innerHeight;

const translateStart = -100;
const translateMiddle = 0;
const translateEnd = 100;

const parallaxConfig = {
  scrollRange: [scrollStart, scrollMiddle, scrollEnd],
  translateYRange: [translateStart, translateMiddle, translateEnd],
};

function CallToAction() {
  // Check for both width and height
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px), (max-height: 600px)' });
  const { scrollY } = useScroll();

  // Initialize the y transform
  let y = useTransform(scrollY, parallaxConfig.scrollRange, parallaxConfig.translateYRange);

  // Disable the parallax effect on small screens
  if (isSmallScreen) {
    y = undefined;
  }

  return (
    <BackgroundWrapper 
      id='CallToAction'
      className='py-10 min-h-section-height-small flex flex-col justify-center items-center'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range2-trim-small.png"}
      mobileSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range2.png"}
      backgroundSize="cover"
      backgroundAttachment='fixed'
      bgOpacity={80}
    >
      {/* Apply parallax effect if the screen is large enough */}
      <motion.div 
        className='mx-4'
        style={y ? { y } : {}} // Disable parallax on small screens
      >
        <InnerCallToAction />
      </motion.div>
    </BackgroundWrapper>
  );
}

export default CallToAction;
