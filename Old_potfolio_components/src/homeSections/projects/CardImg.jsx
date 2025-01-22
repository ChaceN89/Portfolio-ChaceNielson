/**
 * @file CardImg.jsx
 * @module CardImg
 * @desc React component that renders an image with animation effects.
 * This component uses Framer Motion for animations, including opacity and blur
 * effects based on initial load, click state, and hover state. It also utilizes 
 * the ImageComponent wrapper for displaying images with a blurhash.
 *
 * @component CardImg
 * 
 * @requires react
 * @requires motion from 'framer-motion'
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @example
 * // Example usage of CardImg component
 * import CardImg from './CardImg';
 * 
 * function ExampleCard() {
 *   return (
 *     <CardImg
 *       isInitialLoad={true}
 *       isClicked={false}
 *       isHovered={false}
 *       projID="project1"
 *       imgSrc="image.jpg"
 *       imgBlurhash="LKO2?U%2Tw=w]~RBVZRi};RPxuwH"
 *     />
 *   );
 * }
 * 
 * @exports CardImg
 * 
 * @param {boolean} isInitialLoad - Indicates if the image is in its initial load state.
 * @param {boolean} isClicked - Indicates if the image has been clicked.
 * @param {boolean} isHovered - Indicates if the image is being hovered over.
 * @param {string} projID - The unique identifier for the project.
 * @param {string} imgSrc - The source URL of the image.
 * @param {string} imgBlurhash - The blurhash of the image.
 * 
 * @property {boolean} isInitialLoad - State of initial load for the image.
 * @property {boolean} isClicked - State of click interaction for the image.
 * @property {boolean} isHovered - State of hover interaction for the image.
 * @property {string} projID - Project identifier to construct image path.
 * @property {string} imgSrc - Source path of the image.
 * @property {string} imgBlurhash - Blurhash for the image.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import { motion } from 'framer-motion';
import ImageComponent from '../../wrappers/ImageComponent';

function CardImg({ isInitialLoad, isClicked, isHovered, projID, imgSrc, imgBlurhash }) {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      animate={{ 
        opacity: (isInitialLoad || isHovered ? 1 : 0.6),
        filter: isInitialLoad || isClicked || isHovered ? 'blur(0px)' : 'blur(0.5px)',
        scale: isHovered ? 1.05 : 1 // Add this line to handle scaling
      }}
      whileHover={{ scale: 1.1 }} // Add this line to handle hover scaling
      transition={{ 
        delay: 0.2, 
        duration: 0.4, ease: 'easeInOut' 
      }} 
    >
      <ImageComponent
        src={`${process.env.PUBLIC_URL}/projects/${projID}/${imgSrc}`}
        blurHash={imgBlurhash}
        alt=""
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

export default CardImg;
