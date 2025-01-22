/**
 * @file HeroText.jsx
 * @module HeroText
 * @desc React component that implements a hero section with sliding text animations
 * and a parallax effect. This component uses the framer-motion library to create
 * smooth slide-in animations and applies a parallax scrolling effect to the text.
 * The parallax effect is removed on small screens to improve performance and usability.
 *
 * @component HeroText
 * 
 * @requires React
 * @requires motion, useScroll, useTransform from 'framer-motion'
 * @requires useMediaQuery from 'react-responsive'
 * @requires heroData from '../../data/pageData/heroData'
 * @requires MyButton from '../../components/uiElements/MyButton'
 * @requires openPdf from '../../functions/utils'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * @see {@link https://github.com/yocontra/react-responsive | React Responsive Documentation}
 * 
 * @example
 * // Example usage of HeroText component
 * import HeroText from './HeroText';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <HeroText />
 *     </div>
 *   );
 * }
 * 
 * @exports HeroText
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-06
 * @since 2.1
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { heroData } from '../../data/pageData/heroData';
import MyButton from '../../components/buttons/MyButton';
import { openPdf } from '../../functions/utils';
import MediaLinks from '../../components/footer/MediaLinks';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function HeroText() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 140]);

  return (
    <motion.div
      className="text-container"
      variants={textVariants}
      initial="initial"
      animate="animate"
      style={isSmallScreen ? {} : { y, willChange: 'transform' }}
    >
      <motion.div variants={textVariants}>
        <motion.h3 variants={textVariants} className="pl-2">
          {heroData.top}
        </motion.h3>
        <motion.h1 variants={textVariants} className="pb-2">
          {heroData.name}
        </motion.h1>
        <motion.div variants={textVariants} className="pb-2">
          {heroData.description}
        </motion.div>
        <motion.div variants={textVariants} className="text-buttons">
          {heroData.buttons.map((button, index) => (
            <motion.div key={index} variants={textVariants}>
              <MyButton
                className='w-full lg:w-auto'
                to={button.id}
                onClick={button.pdf ? () => openPdf(button.pdf) : undefined}
              >
                {button.name}
              </MyButton>
            </motion.div>
          ))}
        </motion.div>
          <motion.div variants={textVariants} className="pt-1 flex justify-start">
            <MediaLinks headerLinks={true} />
          </motion.div>


      </motion.div>
    </motion.div>
  );
}

export default HeroText;
