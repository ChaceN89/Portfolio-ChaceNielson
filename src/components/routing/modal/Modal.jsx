/**
 * @file Modal.jsx
 * @module Modal
 * @desc A reusable modal component with smooth slide-in and slide-out animations using Framer Motion.
 *       Handles navigation logic, including closing on backdrop click, Escape key support, and route-based transitions.
 * 
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @example
 * <Modal>
 *   <div>Your Modal Content Here</div>
 * </Modal>
 * 
 * @author Chace Nielson
 * @created Jan 23, 2025
 * @updated Jan 23, 2025
 */
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import SlideTransition from '../../animations/SlideTransition';
import BackgroundWrapper from '../../uiElements/images/BackgroundWrapper';

import {removeParamsFromUrl} from '../../../utils/utils'; // Import your utility function to remove params from URL

import './Modal.styles.css'; // Import your CSS styles for the modal

export default function Modal({ children }) {
  const navigate = useNavigate();
  const navigationType = useNavigationType(); // Get the type of navigation

  const [isVisible, setIsVisible] = useState(true); // Modal visibility state
  const [showBackdrop, setShowBackdrop] = useState(false);



  // Add or remove the "no-scroll" class from the body
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup class on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isVisible]);

  // Close modal handler
  const handleClose = (e) => {
    e.stopPropagation();
    if (!isVisible) return // Prevent closing if already closed or being closed

    setIsVisible(false);
    setShowBackdrop(false);


    setTimeout(() => {
      // Navigate after the animation ends
      if (navigationType === 'PUSH' && window.history.length > 1) {
        navigate(-1);
      } else {
        removeParamsFromUrl() // remove the params form the URL
      }
    }, 1000); // Happens after the animation duration (1000)
  };

  // Handle Escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => { // function to handle keydown events
      if (e.key === 'Escape') handleClose(e);
    };

    // Add event listener for keydown and remove it on cleanup
    // This will ensure that the event listener is added only once when the component mounts
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    
  }, []);

  // Handle backdrop click to close the modal
  useEffect(() => {
    const timeout = setTimeout(() => setShowBackdrop(true), 10); // Let browser paint before applying opacity
    return () => clearTimeout(timeout);
  }, []);

  return(
    <div 
      className={`fixed inset-0 z-40  flex items-center justify-center duration-1000 transition-all 
        ${showBackdrop && 'backdrop-blur-sm'}
      `}
    >
      
      {/* page BACKDROP - over entiure screen */}
      <div
        onClick={handleClose}
        className={`
          absolute inset-0 bg-accent/10  z-0
          transition-opacity duration-1000 ease-in-out
          ${showBackdrop ? 'opacity-100' : 'opacity-0'}
        `}
      />


      {/* Sliding Modal */}
      <AnimatePresence>
        {isVisible && (
          <SlideTransition
            enter="right" // Slide in from the right
            exit="left"   // Slide out to the left
            duration={0.8} // Match the timeout duration
            translationDist={100} // Customize the slide distance
            delay={0.2} 
            className="modal-container z-1"
          >

            {/* Close Button absolute in top right */}
            <button 
              onClick={handleClose}
              className="absolute top-1 right-1 hover:cursor-pointer hover:text-primary z-10" 
            >
              <IoMdClose size={34} />
            </button>

            {/* Inner content */}
            <BackgroundWrapper
              backgroundSm="/overlays/dots-1.png"
              backgroundClass="bg-accent/40 min-w-[40vw] min-h-[40vh]"
              noise
              fixed
            >
              {/* Main content */}
              <div className="modal-content">
                {children} 
              </div>
            </BackgroundWrapper>
          </SlideTransition>
        )}
      </AnimatePresence>
    </div>
  )
}

