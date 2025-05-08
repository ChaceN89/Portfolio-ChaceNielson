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
import ImageComponent from '../uiElements/images/ImageComponent';
import BackgroundWrapper from '../uiElements/images/BackgroundWrapper';
import SectionWrapper from '../wrappers/SectionWrapper';
import MediaFrame from '../uiElements/mediaFrame/MediaFrame';

export default function AppRoutes() {
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // Navigation for closing modal

  // Get query parameters
  const params = new URLSearchParams(location.search);
  const projectID = params.get(projectParam);
  const specializationID = params.get(skillParam);

  
  
  // Get pathnamd for on change and navigation type
  const { pathname } = useLocation(); // Get the current location of Router
  const navigationType = useNavigationType(); // Get the type of navigation


  // Scroll Position UseEffect
  useEffect(() => { // Call useEffect every time the pathname (location) changes
    let timeout;

    if (navigationType !== "POP") { // Only If the navigation type is  not POP (back/forward button) - back/forward saves scroll position
      timeout = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 200); // Match your transition duration
    }

    return () => {
      clearTimeout(timeout); // Clear the timeout on unmount
    }
  }, [pathname]); // Activated when pathname changes
  

  return (
    <div className='min-w-56 overflow-x-hidden z-'>
      {/* Main App Routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageTransition><TestHomePage name="Home" /></PageTransition>} />

            <Route path="/projects" element={<PageTransition><TestPage name="Projects" /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><TestPage name="Contact" /></PageTransition>} />
            <Route path="/thanks" element={<PageTransition><TestPage name="Thanks" /></PageTransition>} />
            <Route path="/about" element={<PageTransition><TestAboutPage name="About" /></PageTransition>} />
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
      initial={{ opacity: 0, position: 'relative', left: '100vw' }}
      animate={{ opacity: 1, left: 0 }}
      exit={{ opacity: 0, left: '-100vw' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

function TestAboutPage({ name }) {
  return(
    <div className='my-20'>
      <div id="Gallery" className='bg-secondary/40  border'> 
        <BackgroundWrapper
          background="/backgrounds/computer-1.png"
          backgroundClass='w-screen h-[600px]'
          childClass='flex h-full w-full items-center justify-center gap-4'
          fixed
          blur={4}
          // noise
        >
          <div>

            <h1>H1: {name}</h1>
            <h2>H2: {name}</h2>
            <h3>H3: {name}</h3>
          </div>
          <div className='grid grid-cols-3 gap-4 '>
            <ImageComponent
              src={"/backgrounds/pexels-7.jpg"} alt={"aaaa"}
              className="rounded-xl  h-72 object-cover"
            />
            <ImageComponent
              src={"/backgrounds/pexels-14.jpg"} alt={"aaaa"}
              className="rounded-xl  h-72 object-cover"
            />
            <ImageComponent
              src={"/backgrounds/pexels-12.jpg"} alt={"aaaa"}
              className="rounded-xl  h-72 object-cover"
            />

          </div>

        </BackgroundWrapper>
      
      </div>
      <div className='h-96'></div>
      <div id="Timeline" className='bg-white/90 h-56 border'> Projects</div>
 
      <div className='h-96'></div>
    </div>
  )

}

function TestHomePage({ name }) {
  return(
    <div >
      <div id="Hero" className='bg-black '> 
        <BackgroundWrapper
          background="/backgrounds/pexels-10.jpg "
          backgroundClass='w-screen min-h-[90vh] flex  items-center justify-center '
          fixed
          // noise
          // opacity={0.3}
          blur={10} // cause jitter
        >
          <BackgroundWrapper 
            background="/backgrounds/pexels-10.jpg"
            backgroundClass='h-fit w-full  text-accent rounded-full border-2 border-red-400/20' 
            childClass='flex h-full w-full items-start p-32 justify-center gap-4 '
            fixed
          >
            <div>

            <h2 className='whitespace-nowrap '>Chace Nielson</h2>
            <ul className='bullet-list list-inside'>
              <li>Software Engineer</li>
              <li>Full-Stack Developer</li>
              <li>Game Developer</li>
            </ul>
       
            </div>
            <div className='grid grid-cols-2 gap-4 w-3/4 '>
              <ImageComponent
                src={"/portraits/pngs/chace-2.png"} alt={"aaaa"}
                className="rounded-xl  h-54 "
                imgClass="object-top"
                />
              {/* <ImageComponent
                src={"/backgrounds/pexels-18.jpg"} alt={"aaaa"}
                className="rounded-xl  h-54 object-cover"
                /> */}
              <ImageComponent
                src={"/backgrounds/pexels-1.jpg"} alt={"aaaa"}
                className="rounded-xl  h-54 object-cover"
                />
          

              </div>
          </BackgroundWrapper>

        </BackgroundWrapper>
      
      </div>
      <div id="Projects" className='bg-white/90 h-56 border'> 
        my 3 large projects (alberta Tomorrow, Glass gecko games website, Scale the Depths)
      </div>
      <div id="TechStack" className='bg-red-400/40 h-72 border'> 
        Prime tehnologies and tools i use, link to see all of them
      </div>
      <div id="CallToAction" className='bg-accent/40 h-80 border'> 
        Call to action, link to contact me
        //softskills
      </div>
      <div className='h-96'></div>
    </div>
  )

}


function TestPage({ name }) {

  return(
    <div className='my-20'>
      <h1>Content {name}</h1>
      <MediaFrame
        thumbnail={"/backgrounds/computer-1.png"}
        videoId="MHDH_m0agFM" 
        alt={"alternate text"}
        title={"A full title"}
        className="h-80 lg:h-96"
      />
      <h1>H1: {name}</h1>
      <h2>H2: {name}</h2>
      <h3>H3: {name}</h3> 
      <h4>H4: {name}</h4>
      <h5>H5: {name}</h5>
      <h6>H6: {name}</h6>
      <p>Paragraph: {name}</p>
      <small>Small: {name}</small>

      <MediaFrame
        thumbnail={"/backgrounds/computer-1.png"}
        videoId="sgqmCPhj9YA" // ✅ corrected
        alt={"alternate text"}
        title={"A full title"}
        className="h-80 lg:h-96"
      />
      <MediaFrame
        thumbnail={"/backgrounds/computer-1.png"}
        videoId="AJMJtZt2-g0" // ✅ corrected
        alt={"alternate text"}
        title={"A full title"}
        className="h-80 lg:h-96"
      />
    </div>
  )




}
