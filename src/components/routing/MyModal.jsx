/**
 * @file Modal.jsx
 * @module Modal
 * @desc A simplified reusable modal component with a close button and backdrop support. 
 * contains a background wrapper for noise and a slide transition for the modal content.
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

export default function MyModal({ children }) {
  const navigate = useNavigate();

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
    handleClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-35 flex-col items-center justify-center"
    >

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        delay={0.1}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0 "
      />

      {/* Modal container - spacing location for content */}
      <div
        className="absolute left-0 right-0 flex justify-center items-center z-0"
        style={{
          top: 'var(--spacing-nav-height)',
          height: 'calc(100vh - var(--spacing-nav-height))', // Adjust height to account for the navbar
        }}
      >

        {/* Slide transition for the visual part of the modal */}
        <div className="flex items-center justify-center z-20 h-full">
          <div className="relative w-full mx-auto min-w-[40%] max-w-[85%]">
            <SlideTransition
              enter="right"
              exit="left"
              duration={0.5}
              translationDist={100}
              delay={0.2}
            >
              <BackgroundWrapper 
                backgroundClass="relative rounded-3xl border-2 border-primary/80 bg-accent/50 "
                noise
              >
                {/* Close button */}
                <button 
                  onClick={handleClose}
                  className="absolute top-1.5 right-1.5 hover:cursor-pointer hover:text-tertiary z-10" 
                >
                  <IoMdClose size={34} />
                </button>

                {/* Modal Content */}
                <div className="relative max-h-[85vh] overflow-y-auto p-4 scroll-element">
                  {children}
                </div>
              </BackgroundWrapper>
            </SlideTransition>
          </div>
        </div>

      </div>
    </div>
  );
}