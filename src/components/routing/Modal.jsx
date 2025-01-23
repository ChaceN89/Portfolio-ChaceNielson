/**
 * @file Modal.jsx
 * @module Modal
 * @desc A reusable modal component with smooth slide-in and slide-out animations using Framer Motion.
 *       Handles navigation logic, including closing on backdrop click, Escape key support, and route-based transitions.
 * 
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the modal.
 * 
 * @returns {JSX.Element} The Modal component with animations and navigation support.
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
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import SlideTransition from '../animations/SlideTransition';

export default function Modal({ children }) {
  const navigate = useNavigate();
  const navigationType = useNavigationType(); // Get the type of navigation

  const [isVisible, setIsVisible] = React.useState(true); // Modal visibility state

  // Close modal handler
  const handleClose = (e) => {
    e.stopPropagation();

    setIsVisible(false); // Trigger exit animation
    setTimeout(() => {
      // Navigate after the animation ends
      if (navigationType === "PUSH" && window.history.length > 1) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }, 300); // Match the duration of the exit animation (400ms)
  };

  // Handle Escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose(e);
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <AnimatePresence>
        {isVisible && (
          <SlideTransition
            enter="right" // Slide in from the right
            exit="left"   // Slide out to the left
            duration={0.3} // Match the timeout duration
            translationDist={500} // Customize the slide distance
            delay={0.1} // Optional: Customize the delay
            className="modal-container"
          >
            <button className="modal-close-btn" onClick={handleClose}>
              <IoMdClose size={30} />
            </button>

            <div className="modal-content">
              {children}
            </div>
          </SlideTransition>
        )}
      </AnimatePresence>
    </div>
  );
}
