import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

export default function Modal({ children }) {
  const navigate = useNavigate();

  // Close modal handler
  const handleClose = (e) => {
    e.stopPropagation();

    // Navigate back if there is a history, otherwise redirect to "/"
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <motion.div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        initial={{ y: '100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100vh', opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <div className=' border-2 border-black'>

        {children}
        </div>
      </motion.div>
    </div>
  );
}
