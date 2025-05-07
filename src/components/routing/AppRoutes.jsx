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

  const { pathname } = useLocation(); // Get the current location of Router


  // Get navigation type
  const navigationType = useNavigationType(); // Get the type of navigation

  

  return (
    <div className='min-w-56 overflow-x-hidden z-'>
      {/* Main App Routes */}

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

  return children;

  // Don't use framer motion for page transitions  - find new react transition library

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

  return(
    <SectionWrapper
     title={name} 
     subtitle ={`This is the subtitle for the section called ${name}.`}
    >

      Chidlren of the subtiel

    </SectionWrapper>

  )


}







// TestPage component for testing purposes  - wil lreplace with actual pages onces transitions are working
function TestPage2({ name }) {

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


return(
  <BackgroundWrapper
      background="/backgrounds/pexels-1.jpg"
      backgroundSm="/backgrounds/pexels-11.jpg"
      backgroundClass='w-screen  py-56  '
      childClass='space-y-20'
      fixed
      // blur={10}
      // noise
    >

        <h1 className='text-white' >H1: {name}</h1>
        <h2 className='text-white' >H2: {name}</h2>
        <h3 className='text-white' >H3: {name}</h3>
        <h4 className='text-white' >H4: {name}</h4>
        <h5 className='text-white' >H5: {name}</h5>
        <h6 className='text-white' >H6: {name}</h6>
        <p>P: This is the {name} page.</p>
        <small>Small: This is the {name} page.</small>
        <ImageComponent
         src={"/backgrounds/pexels-12.jpg"} alt={"aaaa"}
          className="rounded-xl  h-72 object-cover"
          />
        <ImageComponent
         src={"/backgrounds/pexels-1.jpg"} alt={"bbbb"}
          className="rounded-xl  h-72 bg-red-500 object-cover absolute"
          />

          <BackgroundWrapper
          background="/backgrounds/pexels-1.jpg"
          backgroundClass='w-screen h-72  background-opacity-50 my-72'
          childClass='flex h-full w-full items-center justify-center space-y-2'
          fixed
          // blur={10}
          // noise
        >
          <h4 className='text-white'>Title</h4>


        </BackgroundWrapper>

        aaaa



         <div className='bg-red-500 h-5 w-full'>aaa</div>
        <ImageComponent
         src={"/backgrounds/pexels-10.jpg"} alt={"aaaa"}
           backgroundClass='w-full object-cover'
          />
          <div className='bg-red-500 h-5 w-full'>Text</div>
        <ImageComponent
         src={"/backgrounds/pexels-13.jpg"} alt={"aaaa"}
          className="rounded-xl   object-cover"
          />
        <ImageComponent
         src={"/backgrounds/pexels-7.jpg"} alt={"aaaa"}
          className="rounded-xl  h-72 object-cover"
          />

        <BackgroundWrapper
          background="/backgrounds/computer-2.jpg"
          backgroundClass='w-full object-cover overflow-hidden '
          childClass='space-y-2 w-full h-96 overflow-hidden'
          fixed
          
          
        ></BackgroundWrapper>

<ImageComponent
         src={"/backgrounds/pexels-4.jpg"} alt={"aaaa"}
          className="rounded-xl  h-72 object-cover"
          />
<ImageComponent
         src={"/backgrounds/pexels-15.jpg"} alt={"aaaa"}
          className="rounded-xl  h-72 object-cover"
          />



  </BackgroundWrapper>
)


  return (
    <div className="flex flex-col items-center justify-center border-2  pt-20 space-y-4 p-40 ">
     
      <ImageComponent
        src={"/backgrounds/pexels-0.jpg"} alt={"aaaa"}
        className="rounded-xl w-96 h-72 object-cover"
      />
      <h1 >H1: {name}</h1>
      <h2 >H2: {name}</h2>
      <h3 >H3: {name}</h3>
      <h4 >H4: {name}</h4>
      <h5 >H5: {name}</h5>
      <h6 >H6: {name}</h6>
      <p>P: This is the {name} page.</p>
      <small>Small: This is the {name} page.</small>

      <BackgroundWrapper
        background="/backgrounds/pexels-13.jpg"
        backgroundClass='p-20 px-56 '
        childClass='space-y-2'
        backgroundSm = "/backgrounds/pexels-11.jpg"
        fixed
        blur
        noise
      >
        <h1 className='text-white' >H1: {name}</h1>
        <h2 className='text-white' >H2: {name}</h2>
        <h3 className='text-white' >H3: {name}</h3>
        <h4 className='text-white' >H4: {name}</h4>
        <h5 className='text-white' >H5: {name}</h5>
        <h6 className='text-white' >H6: {name}</h6>
        <p>P: This is the {name} page.</p>
        <small>Small: This is the {name} page.</small>
        <ImageComponent
         src={"/backgrounds/pexels-12.jpg"} alt={"aaaa"}
          className="rounded-xl  h-72 object-cover"
          />
        <ImageComponent
         src={"/backgrounds/pexels-4.jpg"} alt={"aaaa"}
          className="rounded-xl  h-72 object-cover"
          />
        <ImageComponent
         src={"/backgrounds/pexels-1.jpg"} alt={"aaaa"}
          className="rounded-xl  h-72 object-cover"
          />


      </BackgroundWrapper>

      <div className='grid grid-cols-3 gap-4 '>

        {/* display random order lsit */}
        {listImgs.map((img, index) => (
        <div className='flex flex-col items-center justify-center border rounded-xl ' key={index}>
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



