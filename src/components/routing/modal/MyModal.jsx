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
import { removeParamsFromUrl } from '../../../utils/utils';
import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';

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
      <div 
        ref={backdropRef}
        className="absolute inset-0 bg-secondary/50 backdrop-blur-sm z-0 transition-opacity duration-500" 
      />

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
    </div>
  );
}


function Modal2({ children }) {
  const navigate = useNavigate();
  const navigationType = useNavigationType(); // Get the type of navigation

  const [isVisible, setIsVisible] = useState(true); // Modal visibility state
  const [showBackdrop, setShowBackdrop] = useState(false);

  const isClosingRef = useRef(false); // <--- 1. Create a persistent flag


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
    
    if (isClosingRef.current || !isVisible) return; // <--- 2. Guard against multiple calls

    isClosingRef.current = true; // <--- 3. Lock the close function
  
    setIsVisible(false);    // Hide the modal
    setShowBackdrop(false); // Hide the backdrop

    setTimeout(() => {
      // Navigate after the animation ends
      if (navigationType === 'PUSH' && window.history.length > 1) {
        navigate(-1);
      } else {
        removeParamsFromUrl() // remove the params form the URL
      }

      isClosingRef.current = false; // <--- 4. Optionally reset for re-use if modal gets re-opened

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
      className={`fixed inset-0 z-40 flex items-center justify-center duration-1000 transition-all 
         ${showBackdrop ? 'backdrop-blur-sm' : 'hidden'} 
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
              backgroundSm="/overlays/scratch-3.png"
              backgroundClass=" min-w-[40vw] min-h-[40vh]"
              opacity={0.3}
              noise
            >
              {/* Main content */}
              <div className="modal-content ">
                {children} 
              </div>
            </BackgroundWrapper>
          </SlideTransition>
        )}
      </AnimatePresence>
    </div>
  )
}

