/**
 * @file Modal.jsx
 * @module Modal
 * @desc A simplified reusable modal component with a close button and backdrop support. No animations.
 * 
 * @author Chace Nielson
 * @created Jan 23, 2025
 * @updated May 16, 2025
 */

import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

// Components
import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import SlideTransition from '@/components/animations/SlideTransition';

// Utils and Styles
import { removeParamsFromUrl } from '@/utils/utils';
import './Modal.styles.css'

export default function MyModal({ children }) {
  const navigate = useNavigate();
  const backdropRef = useRef(null);

  // close the modal by removing the params from the URL
  const handleClose = () => {
    navigate(removeParamsFromUrl(), { replace: true });
  };

  // Close on Escape key toclose the modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) handleClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-35 flex-col items-center justify-center"
    >
      {/* Backdrop overlay behind the modal */}
      <motion.div
        ref={backdropRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        delay={0.1}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"
      />

      {/* Modal container - spacing location for content */}
      <div
        className="absolute left-0 right-0 flex justify-center items-center "
        style={{
          top: 'var(--spacing-nav-height)',
          height: 'calc(100vh - var(--spacing-nav-height))',
        }}
      >

        {/* Slide transition for the visual part of the modal */}
        <SlideTransition
          enter="right" // Slide in from the right
          exit="left"   // Slide out to the left
          duration={0.5} // Match the timeout duration
          translationDist={100} // Customize the slide distance
          delay={0.2} 
          className=" flex items-center justify-center z-10  h-full  "
        >

          {/* Modal */}
          <BackgroundWrapper 
            backgroundSm="/overlays/scratch-3.png"
            backgroundClass=" relative bg-primary rounded-3xl border-2 border-secondary/80 modal-container"
            opacity={0.2}
            noise  
          >
            
            {/* Close button */}
            <button 
              onClick={handleClose}
              className="absolute top-1.5 right-1.5 hover:cursor-pointer hover:text-tertiary z-10" 
            >
              <IoMdClose size={34} />
            </button>
    
            {/* Main Modal child content */}
            <div className="p-4">
              {children}
            </div>
            
          </BackgroundWrapper>
        </SlideTransition>
      </div>
    </div>
  );
}