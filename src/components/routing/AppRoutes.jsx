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

import React, {useEffect, useRef, useState} from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


// layouts
import Layout from './Layout';

// pages
// import Home from '../pages/Home';
// import Gallery from '../pages/Gallery';
// import Thanks from '../pages/Thanks';

// Modal pages
import Modal from './modal/Modal'; // global Modal
import Project from '../pages/Project';
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


const pageTransitionDuration = 0.6; // Duration of the page transition animation


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
      }, pageTransitionDuration*1000); // Match your transition duration
    }

    return () => {
      clearTimeout(timeout); // Clear the timeout on unmount
    }
  }, [pathname]); // Activated when pathname changes
  



  return (
    <div className='min-w-56 overflow-x-hidden z-'>
      {/* Main App Routes */}
        {projectID && (
          <Modal > 
            <Project projectName={projectID} />
          </Modal>
        )}
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

function TestAboutPage({ name }) {
  return(
    <div className=''>
      <div id="Gallery" className='bg-secondary/40  border'> 
        <BackgroundWrapper
          background="/backgrounds/computer-1.png"
          backgroundClass='w-screen h-[800px]'
          childClass='flex h-full w-full items-center justify-center gap-4'
          fixed
          // blur={2}
          noise
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

  // const background = "/backgrounds/pexels-8.jpg";
  const background = "/backgrounds/pexels-10.jpg";

  return(
    <div >

      <div id="Hero" className='bg-black '> 
        <BackgroundWrapper
          background={background}
          backgroundClass='w-screen min-h-[90vh] flex  items-center justify-center '
          fixed
          noise
          // opacity={0.3}
          blur={10} // cause jitter
        >
          <BackgroundWrapper 
            background={background}
            backgroundClass='h-full w-full  text-black rounded-full border-2 ' 
            childClass='flex h-full w-full items-center px-40 justify-around gap-4 '
            fixed
          >
            <div className='w-[65vw] flex  items-center justify-around gap-4'>

       
            <div className='text-white '>

              <h2 className='whitespace-nowrap '>Chace Nielson</h2>
              <ul className='bullet-list list-inside'>
                <li><h5>Software Engineer</h5></li>
                <li><h5>Full-Stack Developer</h5></li>
                <li><h5>Game Developer</h5></li>
              </ul>

            </div>
   
            <div className=' grid grid-cols-2 gap-4 items-center py-10 '>
              <ImageComponent
                src={"/portraits/pngs/chace-2.png"} alt={"aaaa"}
                className="  h-72 w-72   rounded-bl-[100px] object-cover rounded-xl"
                imgClass="object-top"
                />
                <div className='space-y-'>

              <ImageComponent
                src={"/backgrounds/pexels-4.jpg"} alt={"aaaa"}
                className="rounded-xl  h-54 object-cover"
                />
              <ImageComponent
                src={"/backgrounds/pexels-1.jpg"} alt={"aaaa"}
                className="rounded-xl  h-54 object-cover"
                />
                </div>
          

              </div>
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

  const navigate = useNavigate();
  const location = useLocation();

  const openModal = (projectId) => {
    const currentPath = location.pathname;
    navigate(`${currentPath}?project=${projectId}`);
  };

  return(
    <div className='my-20  space-y-40'>
      <h1>Content {name}</h1>

      {/* Example modal popups */}
      <div className="flex gap-4">
        <button
          onClick={() => openModal("project-1")}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/80 transition"
        >
          Open Modal for Project 1
        </button>

        <button
          onClick={() => openModal("scale-the-depths")}
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/80 transition"
        >
          Open Modal for Project 2
        </button>
      </div>


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
