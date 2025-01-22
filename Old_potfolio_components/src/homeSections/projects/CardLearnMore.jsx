/**
 * @file CardLearnMore.jsx
 * @module CardLearnMore
 * @desc React component that displays a "Learn More" button with animation effects.
 * This component uses Framer Motion for slide-in and slide-out animations and AnimatePresence
 * for conditional rendering based on hover state.
 *
 * @component CardLearnMore
 * 
 * @requires react
 * @requires AnimatePresence, motion from 'framer-motion'
 * @requires globals from '../../data/globals'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @example
 * // Example usage of CardLearnMore component
 * import CardLearnMore from './CardLearnMore';
 * 
 * function ExampleCard() {
 *   const [isHovered, setIsHovered] = React.useState(false);
 *   
 *   return (
 *     <div
 *       onMouseEnter={() => setIsHovered(true)}
 *       onMouseLeave={() => setIsHovered(false)}
 *     >
 *       <CardLearnMore
 *         isHovered={isHovered}
 *         clickLearnMore={() => console.log('Learn More clicked')}
 *       />
 *     </div>
 *   );
 * }
 * 
 * @exports CardLearnMore
 * 
 * @param {boolean} isHovered - Indicates if the card is hovered.
 * @param {function} clickLearnMore - Function to handle the click event on the "Learn More" button.
 * 
 * @property {boolean} isHovered - State of hover interaction for the card.
 * @property {function} clickLearnMore - Event handler for clicking the "Learn More" button.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { globals } from '../../data/globals';

function CardLearnMore({ isHovered }) {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute top-0 right-0 bg-frosted-glass rounded-bl-xl py-0.5 px-1 text-sm border-l-2 border-b-2 card-thin-border"
          initial={{ y: '-100%' }}
          animate={{ y: 0, transition: { delay: 0, duration: globals.project.slide } }}
          exit={{ y: '-100%', transition: { duration: globals.project.slide } }}
        >
          <div className='hover:text-accent' >
            Click to Learn More
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CardLearnMore;
