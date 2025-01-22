/**
 * @file ParallaxMountains.jsx
 * @module ParallaxMountains
 * @desc React component that implements a parallax effect for the mountains in the hero section.
 * This component uses the framer-motion library to create a smooth scrolling effect.
 *
 * @component ParallaxMountains
 * 
 * @requires react
 * @requires motion, useScroll, useTransform from 'framer-motion'
 * @requires useMediaQuery from 'react-responsive'
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * @see {@link https://github.com/contra/react-responsive | React Responsive Documentation}
 * 
 * @example
 * // Example usage of ParallaxMountains component
 * import ParallaxMountains from './ParallaxMountains';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <ParallaxMountains />
 *     </div>
 *   );
 * }
 * 
 * @exports ParallaxMountains
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ImageComponent from '../../wrappers/ImageComponent';

const ParallaxImageLayer = ({ src, alt, yTransform, isParallaxEnabled }) => {
  return isParallaxEnabled ? (
    <motion.div className="w-full absolute" style={{ y: yTransform }}>
      <ImageComponent
        src={src}
        alt={alt}
        className="w-full object-cover md:object-contain md:h-auto h-full scale-150 sm:scale-100"
      />
    </motion.div>
  ) : (
    <div className="w-full absolute">
      <ImageComponent
        src={src}
        alt={alt}
        className="w-full object-cover md:object-contain md:h-auto h-full scale-150 sm:scale-100"
      />
    </div>
  );
};

function ParallaxMountains() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 700]);
  const y2 = useTransform(scrollY, [0, 500], [0, 500]);
  const y3 = useTransform(scrollY, [0, 500], [0, 400]);

  const isMediumOrLarger = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="md:w-full h-full flex justify-center items-end fixed inset-0 -z-50 opacity-100">
      <ParallaxImageLayer
        src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-back.png`}
        alt="Mountains Back"
        yTransform={y1}
        isParallaxEnabled={isMediumOrLarger}
      />
      <ParallaxImageLayer
        src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-mid.png`}
        alt="Mountains Mid1"
        yTransform={y2}
        isParallaxEnabled={isMediumOrLarger}
      />
      <ParallaxImageLayer
        src={`${process.env.PUBLIC_URL}/png-backgrounds/hero-mountains/mountains-front.png`}
        alt="Mountains Mid2"
        yTransform={y3}
        isParallaxEnabled={isMediumOrLarger}
      />
    </div>
  );
}

export default ParallaxMountains;
