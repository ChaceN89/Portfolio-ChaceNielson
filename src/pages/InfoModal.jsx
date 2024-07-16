import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const InfoModal = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className='border p-4 bg-white rounded'>
        <h2>Type: {type} | ID: {id}</h2>
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </motion.div>
  );
};

export default InfoModal;
