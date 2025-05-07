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

import React, {useEffect, useRef} from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


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
import ScrollRestoration from './ScrollRestoration';

export default function AppRoutes() {
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // Navigation for closing modal

  // Get query parameters
  const params = new URLSearchParams(location.search);
  const projectID = params.get(projectParam);
  const specializationID = params.get(skillParam);

  const { pathname } = useLocation(); // Get the current location of Router


  // Get navigation type
  const navigationType = useNavigationType(); // Get the type of navigation


  

  return (
    <div className='min-w-56 overflow-x-hidden'>
      {/* <ScrollRestoration/> */}
      {/* Main App Routes */}
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => {
          console.log("Exit complete");
          console.log("Location: ", location.pathname);
          console.log("Navigation Type: ", navigationType);

          if (typeof window !== "undefined" && navigationType !== "POP") {
            window.scrollTo({ top: 0, behavior: "auto" }); 
          }
        }}
      >

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageTransition><TestPage name="Home" /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><TestPage name="Projects" /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><TestPage name="Contact" /></PageTransition>} />
            <Route path="/thanks" element={<PageTransition><TestPage name="Thanks" /></PageTransition>} />
            <Route path="/about" element={<PageTransition><TestPage name="About" /></PageTransition>} />
            <Route path="*" element={<PageTransition><TestPage name="404 - Not Found" /></PageTransition>} />
          </Route>
        </Routes>

      </AnimatePresence>

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


const PageTransition = ({ children }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      onAnimationStart={() => {
        console.log("Enter animation started");
      }}
      onAnimationComplete={() => {
        console.log("Enter animation completed");
      }}
    >
      {children}
    </motion.div>
  );
};


// TestPage component for testing purposes  - wil lreplace with actual pages onces transitions are working
function TestPage({ name }) {

  const listImgs = [
    "/png-backgrounds/detailed/pexels-mayday.jpg",
    "/png-backgrounds/detailed/pexels-6.jpg",
    "/png-backgrounds/detailed/pexels-2.jpg",
    "/png-backgrounds/detailed/pexels-3.jpg",
    "/png-backgrounds/detailed/pexels-4.jpg",
    "/png-backgrounds/detailed/pexels-5.jpg"
]

const randomOrder = listImgs.sort(() => Math.random() - 0.5); // shuffle the array


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

        {/* display random order lsit */}
        {randomOrder.map((img, index) => (
          <img key={index} src={img} alt="Placeholder" className="rounded-full border-2 border-gray-300 h-56" />
        ))}

        <div>{name}</div>
        <div>{name}</div>
        <div>{name}</div>
        <div>{name}</div>


      </div>
      <ColorBoxes/>
      <HeaderTesting/>

    </div>
  );
}



