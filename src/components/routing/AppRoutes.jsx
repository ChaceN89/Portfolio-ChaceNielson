/**
 * @file AppRoutes.jsx
 * @module AppRoutes
 * @desc Defines the main routing system for the application, including modal routing for projects and specializations.
 *       This component handles URL-based navigation and dynamically renders modals based on query parameters.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated Jan 23, 2025
 */

import React from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// layouts
import Layout from './Layout';
// import Modal from './Modal';

// pages
// import Home from '../pages/Home';
// import Gallery from '../pages/Gallery';
// import Thanks from '../pages/Thanks';

// Modal pages
// import Project from '../pages/Project';
// import Specialization from '../pages/Specialization';

// global Variables
import { skillParam, projectParam } from '../../data/globals';
import ColorBoxes from '../testing/ColorBoxes';
import HeaderTesting from '../testing/HeaderTesting';

export default function AppRoutes() {
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // Navigation for closing modal

  // Get query parameters
  const params = new URLSearchParams(location.search);
  const projectID = params.get(projectParam);
  const specializationID = params.get(skillParam);

  return (
    <div className='min-w-56 overflow-x-hidden'>
      {/* Main App Routes */}
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><TestPage name="Home" /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><TestPage name="Projects" /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><TestPage name="Contact" /></PageTransition>} />
          <Route path="/thanks" element={<PageTransition><TestPage name="Thanks" /></PageTransition>} />
          <Route path="/about" element={<PageTransition><TestPage name="About" /></PageTransition>} />
          <Route path="*" element={<PageTransition><TestPage name="404 - Not Found" /></PageTransition>} />


        </Route>
      </Routes>

      {/* Modal for Projects */}
      {/* {projectID && (
        <Modal onClose={() => {navigate(location.pathname);}} > 
          <Project projectName={projectID} />
        </Modal>
      )} */}

      {/* Modal for Skills
      {specializationID && (
        <Modal onClose={() => {navigate(location.pathname);}} > 
          <Specialization specializationID={specializationID} />
        </Modal>
      )} */}
    </div>
  );
}


// PageTransition component for animating page transitions
const PageTransition = ({ children }) => {
  

  // transition mess up the back/forward button scrolling mechanics 
  return (
    <motion.div
      key="page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};


// TestPage component for testing purposes  - wil lreplace with actual pages onces transitions are working
function TestPage({ name }) {
  return (
    <div className="flex flex-col items-center justify-center border-2  pt-20 space-y-4 p-40">
      <h1 >H1: {name}</h1>
      <h2 >H2: {name}</h2>
      <h3 >H3: {name}</h3>
      <h4 >H4: {name}</h4>
      <h5 >H5: {name}</h5>
      <h6 >H6: {name}</h6>
      <p>P: This is the {name} page.</p>
      <small>Small: This is the {name} page.</small>

      <div className='grid grid-cols-2 gap-4'>

        <img src="/png-backgrounds/detailed/pexels-mayday.jpg" alt="Placeholder" className="rounded-full border-2 border-gray-300 h-56" />
        <img src="/png-backgrounds/detailed/pexels-6.jpg" alt="Placeholder" className="rounded-full border-2 border-gray-300 h-56" />
        <img src="/png-backgrounds/detailed/pexels-2.jpg" alt="Placeholder" className="rounded-full border-2 border-gray-300 h-56" />
        <img src="/png-backgrounds/detailed/pexels-3.jpg" alt="Placeholder" className="rounded-full border-2 border-gray-300 h-56" />
        <img src="/png-backgrounds/detailed/pexels-4.jpg" alt="Placeholder" className="rounded-full border-2 border-gray-300 h-56" />
        <img src="/png-backgrounds/detailed/pexels-5.jpg" alt="Placeholder" className="rounded-full border-2 border-gray-300 h-56" />
      </div>
      <ColorBoxes/>
      <HeaderTesting/>

    </div>
  );
}



