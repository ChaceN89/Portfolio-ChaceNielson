/**
 * @file CallToAction.jsx
 * @module CallToAction
 * @desc React component that implements a call-to-action section with a background image, inner content, and animations.
 * The component uses Framer Motion to add parallax effects and smooth animations. The parallax effect is disabled on small screens
 * (when the screen width is less than 768px or the height is less than 600px) to improve performance and usability.
 * 
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * @see {@link https://github.com/yocontra/react-responsive | React Responsive Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-21
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

const translateStart = -110;
const translateMiddle = 0;
const translateEnd = 110;

const parallaxConfig = {
  scrollRange: [scrollStart, scrollMiddle, scrollEnd],
  translateYRange: [translateStart, translateMiddle, translateEnd],
};

function CallToAction() {
  // Check for both width and height
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px), (max-height: 740px)' });
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
      src={"/png-backgrounds/detailed/range2-trim.png"}
      lowResSrc={"/png-backgrounds/detailed/range2-trim-small.png"}
      mobileSrc={"/png-backgrounds/detailed/range2.png"}
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
