import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { heroData } from '../../data/pageData/heroData';
import MyButton from '../../components/uiElements/MyButton';
import { openPdf } from '../../functions/utils';

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
        <motion.div variants={textVariants} className="pb-4">
          {heroData.description}
        </motion.div>
        <motion.div variants={textVariants} className="text-buttons">
          {heroData.buttons.map((button) => (
            <motion.div key={button.id} variants={textVariants}>
              <MyButton
                className="w-full"
                to={button.id}
                onClick={button.pdf ? () => openPdf(button.pdf) : undefined}
              >
                {button.name}
              </MyButton>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroText;
