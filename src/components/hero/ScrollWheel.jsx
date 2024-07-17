import React from 'react'
import { motion } from 'framer-motion';
import { globals } from '../../globals';
import { Link as ScrollLink } from 'react-scroll';
import ImageComponent from '../resuableComponents/ImageComponent';


function ScrollWheel() {
  const bounceProps = {
    initial: { y: 0 }, // Initial position in the middle of the screen
    animate: { y: [0, -20, 0] }, // Keyframes for the bouncing effect
    transition: {
      duration: 2, // Duration of the animation
      times: [0, 0.5, 1], // Timing for each keyframe
      repeat: Infinity, // Repeat the animation indefinitely
      repeatDelay: 1, // Delay before repeating the animation
      ease: 'easeInOut', // Easing function
    },
  };
  return (
    <div className="w-full h-full flex justify-center items-end absolute inset-0 z-10 opacity-80">
    <motion.div
      className="mb-4"
      {...bounceProps}
    >
      <ScrollLink
        className="hover:cursor-pointer "
        to="CallToAction"
        spy={true}
        smooth={true}
        offset={globals.ScrollLink.offset} 
        duration={globals.ScrollLink.duration}
      >
        <ImageComponent
          src={`${process.env.PUBLIC_URL}/logos/scroll.png`}
          alt="Scroll"
          className="h-7 sm:h-10 md:h-12 lg:h-14 xl:h-16 hover:scale-110"
        />
      </ScrollLink>
    </motion.div>
  </div>
  )
}

export default ScrollWheel