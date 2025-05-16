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
import { removeParamsFromUrl } from '@/utils/utils';
import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import SlideTransition from '@/components/animations/SlideTransition';
import { motion } from 'framer-motion';

export default function MyModal({ children }) {
  const navigate = useNavigate();
  const backdropRef = useRef(null);

  const handleClose = () => {
    navigate(removeParamsFromUrl(), { replace: true });
  };

  // Close on Escape key
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
      className="fixed inset-0 z-40 flex items-center justify-center"
    >
      {/* Backdrop */}
      <motion.div
        ref={backdropRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        delay={0.1}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black/70 z-0"
      />

      <SlideTransition
        enter="right" // Slide in from the right
        exit="left"   // Slide out to the left
        duration={0.4} // Match the timeout duration
        translationDist={100} // Customize the slide distance
        delay={0.2} 
        className="modal-container z-1"
      >

        {/* Modal */}
        <BackgroundWrapper 
          backgroundSm="/overlays/scratch-3.png"
          backgroundClass=" min-w-[40vw] min-h-[40vh]  p-6  relative bg-white rounded-3xl shadow-2xl shadow-black "
          opacity={0.2}
          noise  
        >
          
          {/* Close button */}
          <button 
            onClick={handleClose}
            className="absolute top-2 right-2 hover:cursor-pointer hover:text-tertiary z-10" 
          >
            <IoMdClose size={34} />
          </button>

          {/* Main content */}
          <div className="">
            content
          </div>
          
        </BackgroundWrapper>
      </SlideTransition>
    </div>
  );
}