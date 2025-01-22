/**
 * @file CardText.jsx
 * @module CardText
 * @desc React component that renders the text content for a project card with animation effects.
 * This component uses Framer Motion for slide-in and slide-out animations and AnimatePresence
 * for conditional rendering based on click and hover state. It also includes tooltips and icons 
 * for the main tech stack used in the project.
 *
 * @component CardText
 * 
 * @requires react
 * @requires AnimatePresence, motion from 'framer-motion'
 * @requires globals from '../../data/globals'
 * @requires ShowIcon from '../../components/uiElements/ShowIcon'
 * @requires Tooltip from '../../components/uiElements/Tooltip'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @example
 * // Example usage of CardText component
 * import CardText from './CardText';
 * 
 * function ExampleCard({ project }) {
 *   return (
 *     <CardText
 *       project={project}
 *       isInitialLoad={true}
 *       isClicked={false}
 *       clickLearnMore={() => console.log('Learn More clicked')}
 *       inView={true}
 *     />
 *   );
 * }
 * 
 * @exports CardText
 * 
 * @param {Object} project - The project data to be displayed in the card text.
 * @param {boolean} isInitialLoad - Indicates if the text is in its initial load state.
 * @param {boolean} isClicked - Indicates if the card has been clicked.
 * @param {function} clickLearnMore - Function to handle the click event on the project name.
 * @param {boolean} inView - Indicates if the card is in view.
 * 
 * @property {Object} project - Project details including name, blurb, and mainStack.
 * @property {string} project.name - The name of the project.
 * @property {string} project.blurb - A short description or blurb about the project.
 * @property {Array} project.mainStack - The main tech stack used in the project.
 * @property {boolean} isInitialLoad - State of initial load for the card text.
 * @property {boolean} isClicked - State of click interaction for the card.
 * @property {function} clickLearnMore - Event handler for clicking the project name.
 * @property {boolean} inView - Indicates if the card is in the viewport.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { globals } from '../../data/globals';
import ShowIcon from '../../components/uiElements/ShowIcon';
import Tooltip from '../../components/uiElements/Tooltip';

function CardText({ project, isInitialLoad, inView }) {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col justify-between bg-frosted-glass border-t-2 card-thin-border"
        initial={{ y: "100%" }}
        animate={
          inView && { 
            y: 0, transition: { 
              delay: isInitialLoad ? globals.project.initialSlide : 0, duration: globals.project.slide 
            } 
          }}
        exit={{ y: '100%' }}
        transition={{ 
          duration: globals.project.slide 
        }}
      >
        <div className='flex flex-col justify-between h-full p-1.5'>
          
          <div className=''>
            <h3 className='underline' >{project.name}</h3>
            <p className="text-sm text-darken pt-0.5">{project.blurb}</p>
          </div>

          <div className='flex flex-wrap justify-between w-full  items-center'>
            <span className='text-darken'>{project.tag}</span>
            <div className='flex space-x-2 justify-end items-center'>
              {project.mainStack.map((skill, index) => (
                <React.Fragment key={index}>
                  <Tooltip text={skill.name} openDuration={500}>
                    <ShowIcon 
                      skill={skill}
                      size="2.5rem"
                      useWhiteText={true}
                      diableMag={true}
                    />
                  </Tooltip>
                  {index < project.mainStack.length - 1 && (
                    <div className='h-0.5 rounded-full border-accent border-2'/>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

      </motion.div>
    </AnimatePresence>
  );
}

export default CardText;
