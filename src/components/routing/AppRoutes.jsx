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
import IconList from '../testing/IconList';
import ImageComponent from '../wrappers/ImageComponent';

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
      {/* Main App Routes */}
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => {
 
          window.scrollTo({ top: 0, behavior: "auto" });

          // Depending on the navigation type, you can add logic here
          if (typeof window !== "undefined" && navigationType !== "POP") {
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


  const slideVariants = {
    initial: {
      opacity: 0,
      x: 100, // slide in from right
      position: 'absolute',
      width: '100%',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -100, // slide out to left
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 800 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -800 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
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
    "/backgrounds/computer-1.png",
    "/backgrounds/computer-2.jpg",
    "/backgrounds/pexels-16.jpg",
    "/backgrounds/pexels-0.jpg",
    "/backgrounds/pexels-3.jpg",
    "/backgrounds/pexels-2.jpg",
    "/backgrounds/pexels-14.jpg",
    "/backgrounds/pexels-1.jpg",
    "/backgrounds/pexels-15.jpg",
    "/backgrounds/pexels-5.jpg",
    "/backgrounds/pexels-17.jpg",
    "/backgrounds/pexels-4.jpg",
    "/backgrounds/pexels-6.jpg",
    "/backgrounds/pexels-7.jpg",
    "/backgrounds/pexels-8.jpg",
    "/backgrounds/pexels-9.jpg",
    "/backgrounds/pexels-10.jpg",
    "/backgrounds/pexels-11.jpg",
    "/backgrounds/pexels-12.jpg",
    "/backgrounds/pexels-13.jpg",
]



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

      <div className='grid grid-cols-3 gap-4 '>

        {/* display random order lsit */}
        {listImgs.map((img, index) => (
        <div className='flex flex-col items-center justify-center border rounded-2xl p-1' key={index}>
          <ImageComponent
          key={index} src={img} alt={img} className="rounded-xl  h-72 object-cover"
          />
          
          {/* <img key={index} src={img} alt={img} className="rounded-xl  h-72 object-cover" /> */}
        </div>
        ))}
        <div className='col-span-3 bg-white w-full h-2'/>


        <h1 className='bg-primary flex h-full w-full justify-center items-center p-10 '>{name}</h1>
        <h3 className='col-span-2 bg-primary-alt flex h-full w-full justify-center items-center p-10 '>{name}</h3>
        <h6 className='col-span-2 bg-secondary text-primary flex h-full w-full justify-center items-center p-10 '>{name}</h6>
        <h6 className='bg-secondary-alt text-primary flex h-full w-full justify-center items-center p-10 '>{name}</h6>
        <h6 className='bg-accent flex h-full w-full justify-center items-center p-10 '>{name}</h6>
        <h6 className='col-span-2 bg-accent-alt flex h-full w-full justify-center items-center p-10 '>{name}</h6>
        <h6 className='col-span-2 bg-tertiary flex h-full w-full justify-center items-center p-10 '>{name}</h6>
        <h6 className='bg-tertiary-alt flex h-full w-full justify-center items-center p-10 '>{name}</h6>
 

      </div>
      <ColorBoxes/>
      <HeaderTesting/>
      {/* <IconList/> */}

    </div>
  );
}



