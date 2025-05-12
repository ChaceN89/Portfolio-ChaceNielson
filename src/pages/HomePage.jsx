/**
 * @file HomePage.jsx
 * @module HomePage
 * @desc React component that renders the main sections of the homepage.
 * This component includes sections for hero, call to action, technical skills, job experience, interests, projects, and contact form.
 * It also handles smooth scrolling to sections based on the URL hash.
 *
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import React, { useEffect } from 'react';
// Libraries
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import MyBtn from '@/components/buttons/MyBtn';
import ImageComponent from '@/components/uiElements/images/ImageComponent';

// Data
// import { globals } from '../data/globals';

// UI Elements
// import ReturnToTop from '../components/uiElements/ReturnToTop';

// Sections
// import Hero from '../components/homeSections/hero/Hero';
// import CallToAction from '../components/homeSections/callToAction/CallToAction';
// import TechSkills from '../components/homeSections/techSkills/TechSkills';
// import JobExperience from '../components/homeSections/jobExperience/JobExperience';
// import Interests from '../components/homeSections/interests/Interests';
// import ProjectSection from '../components/homeSections/projects/ProjectSection';
// import ContactForm from '../components/homeSections/contactForm/ContactForm';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', ''); // Extract section ID from URL hash
      scroller.scrollTo(sectionId, {
        offset: -70, // Adjust this offset based on your fixed navbar height
        duration: 10,
        spy: true,
        smooth: true,
      });
    }
  }, [location]);

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
              <MyBtn  children={"test"} callBack={()=>{
                
              }}/>
              {/* <MyBtn  children={"Projects"} callBack={()=>{
                scroller.scrollTo("Projects", {
                  smooth: true,
                  duration: 700,
                  offset: -50,
                });
        
              }}/> */}
              <div>{" "}</div> <br />
              <MyBtn sm children={"Projects"} callBack={()=>{
                scroller.scrollTo("Projects", {
                  smooth: true,
                  duration: 2000,
                  offset: -50,
                });
      
              }}/>
       
              <div>{" "}</div> <br />
              <MyBtn  
                children={"See More"}
                callBack={()=>{
                // leave page to alberta tomorrow sute .cs
                window.open("https://albertatomorrow.ca", "_blank");
      
                }}
              />
  
  
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
  

  // return (
  //   <>
  //     <div id='Home'>
  //       <Hero/>
  //       <CallToAction />
  //     </div>
  //     <div id='Experience'>
  //       <TechSkills />
  //       <JobExperience />
  //       <Interests />
  //     </div>
  //     <div id='Projects'>
  //       <ProjectSection/>
  //     </div>
  //     <div id='ContactMe'>
  //       <ContactForm />
  //     </div>
  //     <ReturnToTop />
  //   </>
  // );
};

export default HomePage;
