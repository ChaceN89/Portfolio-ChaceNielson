/**
 * @file GalleryPhotos.jsx
 * @module GalleryPhotos
 * @desc React component that displays a library of photos and provides functionality for viewing and navigating through photos in a modal.
 * This component calls all the photo elements and includes functions to navigate through the photos within the modal.
 * Also avoids using the modal if the screen is too small or on mobile.
 * 
 * @note This component is part of the photo gallery feature of the application.
 *
 * @component GalleryPhotos
 * 
 * @requires react
 * @requires useState, useEffect from 'react'
 * @requires galleryPhotos from '../../data/pageData/galleryData'
 * @requires useMediaQuery from 'react-responsive'
 * @requires Photo from './Photo'
 * @requires ModalPhotos from './ModalPhotos'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://github.com/contra/react-responsive | React Responsive Documentation}
 * 
 * @returns {JSX.Element} The GalleryPhotos component that displays a library of photos with modal navigation.
 * 
 * @example
 * // Example usage of GalleryPhotos in a page
 * import GalleryPhotos from '../components/photoGallery/GalleryPhotos';
 * 
 * <GalleryPhotos />
 * 
 * @exports GalleryPhotos
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React, { useState, useEffect } from 'react';
import { galleryPhotos } from '../../data/pageData/galleryData';
import { useMediaQuery } from 'react-responsive';
import Photo from './Photo';
import ModalPhotos from './ModalPhotos';

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * GalleryPhotos component
 *
 * @returns {JSX.Element} The GalleryPhotos component.
 */
export default function GalleryPhotos() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 640px)' }); // Tailwind's sm breakpoint is 640px

  // Effect to handle keyboard navigation for the modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowRight') {
        nextPhoto();
      } else if (event.key === 'ArrowLeft') {
        prevPhoto();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Function to open the modal and set the active photo index
  const openModal = (index) => {
    if (isLargeScreen) {
      setActivePhotoIndex(index);
      setIsModalOpen(true);
    }
  };

  // Function to close the modal and reset the active photo index
  const closeModal = () => {
    setIsModalOpen(false);
    setActivePhotoIndex(0);
  };

  // Function to go to the next photo in the modal
  const nextPhoto = () => {
    setDirection(1);
    setActivePhotoIndex((prevIndex) => (prevIndex + 1) % galleryPhotos.length);
  };

  // Function to go to the previous photo in the modal
  const prevPhoto = () => {
    setDirection(-1);
    setActivePhotoIndex((prevIndex) => (prevIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  return (
    <div
      className='gallery px-4 md:px-6 py-2 text-center relative'
      initial="hidden"
      variants={sectionVariants}
    >
      {/* Render each photo in the gallery */}
      {galleryPhotos.map((item, index) => (
        <Photo key={index} item={item} index={index} openModal={openModal} />
      ))}

      {/* Render the modal if the screen size is large */}
      {isLargeScreen && (
        <ModalPhotos 
          isModalOpen={isModalOpen} 
          closeModal={closeModal} 
          activePhotoIndex={activePhotoIndex} 
          nextPhoto={nextPhoto} 
          prevPhoto={prevPhoto} 
          direction={direction}
        />
      )}
    </div>
  );
}
