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

import React, {useEffect, useState} from 'react';
import { Routes, Route, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ThanksPage from '@/pages/ThanksPage';
import ProjectsPage from '@/pages/ProjectsPage';
import NotFoundPage from '@/pages/NotFoundPage';
 

//Layout and  Modal Components
import Layout from './Layout';                                  // Main Layout Component - nav, footer, outlet for main content
import Modal from './modal/Modal';                              // Global Modal Component 
import ProjectModal from '@/pages/ProjectModal';                         // Project Modal Content
import SpecializationModal from '@/pages/SpecializationModal';           // Specialization Modal Content
import { techStackParam, projectParam } from '@/data/globals';  // Modal Param names

// Components - will removed once  I separae this pages components
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import MediaFrame from '@/components/uiElements/mediaFrame/MediaFrame';
import MyBtn from '@/components/buttons/MyBtn';
import { scroller } from "react-scroll";

// Page Transition Duration Global
const pageTransitionDuration = 0.6; // Duration of the page transition animation

export default function AppRoutes() {
  const location = useLocation(); // Current location

  // Get query parameters for Modal
  const params = new URLSearchParams(location.search); // Get the query parameters from the URL
  const projectID = params.get(projectParam);          // Get the project ID from the query parameters
  const specializationID = params.get(techStackParam);     // Get the specialization ID from the query parameters

  // Get pathname for on change and navigation type
  const { pathname } = useLocation(); // Get the current location of Router
  const navigationType = useNavigationType(); // Get the type of navigation

  // Scroll Position UseEffect
  useEffect(() => { // Call useEffect every time the pathname (location) changes
    
    let timeout;
    // Only If the navigation type is  not POP (back/forward button) - back/forward saves scroll position
    if (navigationType !== "POP") { 
      timeout = setTimeout(() => {
        window.scrollTo(0, 0);
      }, pageTransitionDuration*1000); // Page transition duration in milliseconds to sync with animation
    }

    return () => clearTimeout(timeout); // Clear the timeout on unmount
    
  }, [pathname]); // Activated when pathname changes
  
  return (
    <div className='min-w-56 overflow-x-hidden z-'>
      {/* Modals */}
      {projectID && (
        <Modal> 
          <ProjectModal projectName={projectID} />
        </Modal>
      )}
       {specializationID && (
        <Modal > 
          <SpecializationModal specializationID={specializationID} />
        </Modal>
      )} 

      {/* Main Routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageTransition><HomePage /></PageTransition>} />

            <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage/></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage/></PageTransition>} />
            <Route path="/thanks" element={<PageTransition><ThanksPage/></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFoundPage/></PageTransition>} />
          </Route>
        </Routes>
      </AnimatePresence>     
    </div>
  );
}


const PageTransition = ({ children }) => {

  const { pathname } = useLocation(); // Get the current location of Router as a mount key to reset the animation
  const [fadeOut, setFadeOut] = useState(false); // if the page is fading out or not

  return (
    <>
      {/* Backgroun darken on pagetransition */}
      <motion.div
        key={pathname + "-overlay"}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: fadeOut ? 0 : 0.5 }}
        exit={{ opacity: 0.5 }}
        transition={{
          opacity: { duration: fadeOut ? 0.4 : 0, delay:fadeOut ? 0 : 0.2, ease: "easeInOut" }
        }}
        onAnimationComplete={() => {
          if (!fadeOut) setFadeOut(true); // start fade out after initial animation
        }}
        className="fixed inset-0 bg-black pointer-events-none z-[5]"
      />

      {/* Page Transitions */}
      <motion.div
        initial={{ opacity: 0, position: 'relative', left: '100vw', filter: 'blur(50px)' }}
        animate={{ opacity: 1, left: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, left: '-100vw', filter: 'blur(50px)' }}
        transition={{ duration: pageTransitionDuration }}
      >
        {children}
      </motion.div>
    </>
  );
};

