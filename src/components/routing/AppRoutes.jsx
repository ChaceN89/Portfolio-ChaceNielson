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

// Pages
// import Home from '../pages/Home';
// import Gallery from '../pages/Gallery';
// import Thanks from '../pages/Thanks';

//Layout and  Modal Components
import Layout from './Layout';                                  // Main Layout Component - nav, footer, outlet for main content
import Modal from './modal/Modal';                              // Global Modal Component 
import Project from '../pages/Project';                         // Project Modal Content
import Specialization from '../pages/Specialization';           // Specialization Modal Content
import { skillParam, projectParam } from '../../data/globals';  // Modal Param names

// Components - will removed once  I separae this pages components
import ImageComponent from '../uiElements/images/ImageComponent';
import BackgroundWrapper from '../uiElements/images/BackgroundWrapper';
import MediaFrame from '../uiElements/mediaFrame/MediaFrame';
import MyBtn from '../buttons/MyBtn';

// Page Transition Duration Global
const pageTransitionDuration = 0.6; // Duration of the page transition animation


export default function AppRoutes() {
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // Navigation for closing modal

  // Get query parameters for Modal
  const params = new URLSearchParams(location.search); // Get the query parameters from the URL
  const projectID = params.get(projectParam);          // Get the project ID from the query parameters
  const specializationID = params.get(skillParam);     // Get the specialization ID from the query parameters

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
          <Project projectName={projectID} />
        </Modal>
      )}
       {specializationID && (
        <Modal > 
          <Specialization specializationID={specializationID} />
        </Modal>
      )} 

      {/* Main Routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageTransition><TestHomePage name="Home" /></PageTransition>} />

            <Route path="/projects" element={<PageTransition><TestPage name="Projects" /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><TestPage name="Contact" /></PageTransition>} />
            <Route path="/thanks" element={<TestBackgroundPage><TestPage name="Thanks" /></TestBackgroundPage>} />
            <Route path="/about" element={<PageTransition><TestAboutPage name="About" /></PageTransition>} />
            <Route path="*" element={<PageTransition><TestPage name="404 - Not Found" /></PageTransition>} />
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

function TestBackgroundPage({ name }) {
  return(
    <div>
      
    <BackgroundWrapper
      background="/backgrounds/pexels-0.jpg"
      backgroundClass='w-screen h-[100vh] flex  items-center justify-center '
      childClass="flex h-full w-full items-center justify-start pl-[25%] gap-4"
      fixed
      // noise
      // blur={1} 
     >
      <h2>Chace Nielson</h2>

     </BackgroundWrapper>
    <BackgroundWrapper
      background="/backgrounds/pexels-0-1.jpg"
      backgroundClass='w-screen h-[60vh] flex  items-center justify-center '
      childClass="flex h-full w-full items-center justify-start pl-[25%] gap-4"
      fixed
      // noise
      // blur={1} 
     >
      <h2>Chace Nielson</h2>

     </BackgroundWrapper>
    <BackgroundWrapper
      background="/backgrounds/pexels-3.jpg"
      backgroundClass='w-screen h-[90vh] flex  items-center justify-center '
      childClass="flex h-full w-full items-center justify-start pl-[25%] gap-4"
      fixed
      // noise
      // blur={1} 
     >
      <h2>Chace Nielson</h2>

     </BackgroundWrapper>
    <BackgroundWrapper
      background="/backgrounds/pexels-3-2.jpg"
      backgroundClass='w-screen h-[90vh] flex  items-center justify-center '
      childClass="flex h-full w-full items-center justify-start pl-[25%] gap-4"

      fixed
      // noise
     >
      <h2>Software engineer</h2>
     </BackgroundWrapper>
    <BackgroundWrapper
      background="/backgrounds/pexels-3-1.jpg"
      backgroundClass='w-screen h-[90vh] flex  items-center justify-center '

      childClass="flex h-full w-full items-center justify-start pl-[25%] gap-4"
      fixed
      // noise
     >
      <div>

      <h4>Full-Stack Developer</h4>
      <h4>Game Developer Developer</h4>
      </div>

     </BackgroundWrapper>
    <BackgroundWrapper
      background="/backgrounds/pexels-11.jpg"
      backgroundClass='w-screen h-[90vh] flex  items-center justify-center '
      childClass="flex h-full w-full items-center justify-end text-right pr-[10%] gap-4 text-white"
      fixed
      // noise
     >
      <div>

      < h2>Next JS</h2>
      < h2>Web Developer </h2>
      </div>

     </BackgroundWrapper>
    <BackgroundWrapper
      background="/backgrounds/pexels-11-1.jpg"
      backgroundClass='w-screen h-[90vh] flex  items-center justify-center '
      childClass="flex h-full w-full items-center justify-end text-right pr-[10%] gap-4 text-black"
      fixed
      // noise
     >
      <div>

      < h2>Unity Game Engine</h2>
      < h2>Game Developer Developer</h2>
      </div>

     </BackgroundWrapper>
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

  const openSpecializationModal = (specializationId) => {
    const currentPath = location.pathname;
    navigate(`${currentPath}?specialization=${specializationId}`);
  }

  return(
    <div className='my-20  space-y-40'>
      <h1>Content {name}</h1>

      <div className='flex flex-col gap-4'>

        <MyBtn className='sm-btn' children={"See More"}/>
        <MyBtn children={"Skills"}/>
        <MyBtn children={"Lets Connect"}/>
        <MyBtn className='sm-btn' children={"Resume"}/>
        <MyBtn className='sm-btn' children={"Resume"}/>
        <MyBtn children={"Projects"}/>
        <MyBtn children={"More Prohje"}/>
      </div>
      <div className='flex gap-4'>

        <MyBtn className='sm-btn' children={"See More"}/>
        <MyBtn children={"Skills"}/>
        <MyBtn children={"Lets Connect"}/>
        <MyBtn className='sm-btn' children={"Resume"}/>
        <MyBtn className='sm-btn' children={"Resume"}/>
        <MyBtn children={"Projects"}/>
        <MyBtn children={"More Prohje"}/>
      </div>
      <div className='grid grid-cols-6 gap-4 w-screen'>

        <MyBtn className='sm-btn' children={"See More"}/>
        <MyBtn children={"Skills"}/>
        <MyBtn children={"Lets Connect"}/>
        <MyBtn className='sm-btn' children={"Resume"}/>
        <MyBtn className='sm-btn' children={"Resume"}/>
        <MyBtn children={"Projects"}/>
        <MyBtn children={"More Prohje"}/>
      </div>
      <div className='grid grid-cols-2 gap-4 w-screen'>

        <MyBtn className='sm-btn' children={"See More"}/>
        <MyBtn children={"Skills"}/>
        <MyBtn children={"Lets Connect"}/>
        <MyBtn className='sm-btn' children={"Resume"}/>
        <MyBtn className='sm-btn' children={"Resume"}/>
        <MyBtn children={"Projects"}/>
        <MyBtn children={"More Prohje"}/>
      </div>

      {/* Example modal popups */}
      <div className="flex gap-4">
        <button
          onClick={() => openModal("energy-tomorrow")}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/80 transition"
        >
          energy-tomorrow
        </button>
        <button
          onClick={() => openModal("Incorect path project")}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/80 transition"
        >
          Incorect path project
        </button>

        <button
          onClick={() => openModal("scale-the-depths")}
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/80 transition"
        >
          scale-the-depths
        </button>
      </div>

      {/* Example modal popups */}
      <div className="flex gap-4">
        <button
          onClick={() => openSpecializationModal("backend-development")}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/80 transition"
        >
          backend-development
        </button>

        <button
          onClick={() => openSpecializationModal("Incorrect path specialization")}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/80 transition"
        >
          game-development
        </button>

        <button
          onClick={() => openSpecializationModal("frontend-development")}
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/80 transition"
        >
          frontend-development
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
