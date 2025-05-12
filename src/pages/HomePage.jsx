import React from 'react'
import Hero from '@/components/homeSections/hero/Hero'
import AboutMeHero from '@/components/homeSections/hero/AboutMeHero'

export default function HomePage() {
  return (
    <div>
       <div id="hero"> 
        <Hero/>
        <AboutMeHero/>
      </div>
       <div id="featured-projects" className='bg-yellow-400  h-56'> 
        Featured Projects
      </div>
       <div id="tech-stacks" className='bg-pink-400  h-56'> 
        Tech Stacks
      </div>
       <div id="lets-connect" className='bg-red-900  h-56'> 
        Call To Action
      </div>
    </div>
  )
}



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

// import React, { useEffect } from 'react';
// // Libraries
// import { useLocation } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
// import MyBtn from '@/components/buttons/MyBtn';
// import ImageComponent from '@/components/uiElements/images/ImageComponent';

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

/*

export default HomePage = () => {
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
  */

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



