import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import SlideTransition from '../animations/SlideTransition';

export default function Modal({ children }) {
  const navigate = useNavigate();
  const navigationType = useNavigationType(); // Get the type of navigation

  // Close modal handler
  const handleClose = (e) => {
    e.stopPropagation();

    // Navigate back if the user navigated within the app
    if (navigationType === "PUSH" && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      {/* <SlideTransition></SlideTransition> */}
      <motion.div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        initial={{ y: '100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100vh', opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="modal-close-btn" onClick={handleClose}>
          <IoMdClose size={30} />
        </button>

        <div className='modal-content'>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
