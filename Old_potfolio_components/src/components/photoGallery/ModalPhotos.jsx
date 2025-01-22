/**
 * @file ModalPhotos.jsx
 * @module ModalPhotos
 * @desc React component for displaying a modal with a photo and navigation controls. 
 * This component includes functionality to navigate through photos with left and right arrows, as well as a close button.
 * The modal features a smooth transition effect using Framer Motion for sliding photos in and out.
 * 
 * @note This component is part of the photo gallery feature of the application.
 *
 * @component ModalPhotos
 * 
 * @requires react
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * @requires Modal from 'react-modal'
 * @requires galleryPhotos from '../../data/pageData/galleryData'
 * @requires react-icons/fa { FaArrowLeft, FaArrowRight, FaTimes }
 * @requires framer-motion
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.framer.com/docs/ | Framer Motion Documentation}
 * @see {@link https://reactcommunity.org/react-modal/ | React Modal Documentation}
 * 
 * @param {Object} props - The component props.
 * @param {boolean} props.isModalOpen - State to control the visibility of the modal.
 * @param {function} props.closeModal - Function to close the modal.
 * @param {number} props.activePhotoIndex - Index of the currently displayed photo.
 * @param {function} props.nextPhoto - Function to navigate to the next photo.
 * @param {function} props.prevPhoto - Function to navigate to the previous photo.
 * @param {number} props.direction - Direction of the navigation for the transition effect.
 * 
 * @returns {JSX.Element} The ModalPhotos component that displays a photo in a modal with navigation controls.
 * 
 * @example
 * // Example usage of ModalPhotos in a parent component
 * import ModalPhotos from './ModalPhotos';
 * 
 * <ModalPhotos 
 *   isModalOpen={isModalOpen} 
 *   closeModal={closeModal} 
 *   activePhotoIndex={activePhotoIndex} 
 *   nextPhoto={nextPhoto} 
 *   prevPhoto={prevPhoto} 
 *   direction={direction}
 * />
 * 
 * @exports ModalPhotos
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import ImageComponent from '../../wrappers/ImageComponent';
import Modal from 'react-modal';
import { galleryPhotos } from '../../data/pageData/galleryData';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

Modal.setAppElement('#root'); // This is to avoid screen reader issues

/**
 * ModalPhotos component
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isModalOpen - State to control the visibility of the modal.
 * @param {function} props.closeModal - Function to close the modal.
 * @param {number} props.activePhotoIndex - Index of the currently displayed photo.
 * @param {function} props.nextPhoto - Function to navigate to the next photo.
 * @param {function} props.prevPhoto - Function to navigate to the previous photo.
 * @param {number} props.direction - Direction of the navigation for the transition effect.
 * @returns {JSX.Element} The ModalPhotos component.
 */
function ModalPhotos({ isModalOpen, closeModal, activePhotoIndex, nextPhoto, prevPhoto, direction }) {

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0.8,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0.8,
      };
    },
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Photo Modal"
      className="flex items-center justify-center outline-none pt-12"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-30 flex items-center justify-center"
    >
      <div className='relative z-35 max-h-section-height h-120 min-w-[34rem] w-full bg-secondary p-10 rounded'>
        {/* Close button for the modal */}
        <button
          onClick={closeModal}
          className='absolute top-0 right-0 p-2 text-primary hover:text-accent-dark transition-transform transform hover:scale-110'
        >
          <FaTimes size={24} />
        </button>
        {/* Previous photo button */}
        <button
          onClick={prevPhoto}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-primary hover:text-accent-dark transition-transform hover:scale-110'
        >
          <FaArrowLeft size={24} />
        </button>
        <div className='relative w-full h-full overflow-hidden'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activePhotoIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='absolute top-0 left-0 w-full h-full'
            >
              <ImageComponent
                src={`${process.env.PUBLIC_URL}/gallery-photos/${galleryPhotos[activePhotoIndex].photo}`}
                alt={`Chace Nielson Photo ${activePhotoIndex + 1}`}
                className='object-cover w-full rounded-sm'
                blurHash={galleryPhotos[activePhotoIndex].blurhash}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Next photo button */}
        <button
          onClick={nextPhoto}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-primary hover:text-accent-dark transition-transform hover:scale-110'
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </Modal>
  );
}

export default ModalPhotos;
