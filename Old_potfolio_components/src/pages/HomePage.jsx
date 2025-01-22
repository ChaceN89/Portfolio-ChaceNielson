/**
 * @file HomePage.jsx
 * @module HomePage
 * @desc React component that renders the main sections of the homepage.
 * This component includes sections for hero, call to action, technical skills, job experience, interests, projects, and contact form.
 * It also handles smooth scrolling to sections based on the URL hash.
 *
 * @component HomePage
 * 
 * @requires react
 * @requires useEffect from 'react'
 * @requires useLocation from 'react-router-dom'
 * @requires animateScroll as scroll, scroller from 'react-scroll'
 * @requires Hero from '../homeSections/hero/Hero'
 * @requires CallToAction from '../homeSections/callToAction/CallToAction'
 * @requires TechSkills from '../homeSections/techSkills/TechSkills'
 * @requires JobExperience from '../homeSections/jobExperience/JobExperience'
 * @requires Interests from '../homeSections/interests/Interests'
 * @requires ProjectSection from '../homeSections/projects/ProjectSection'
 * @requires ContactForm from '../homeSections/contactForm/ContactForm'
 * @requires ReturnToTop from '../components/uiElements/ReturnToTop'
 * @requires globals from '../data/globals'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @example
 * // Example usage of HomePage component
 * import HomePage from './HomePage';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <HomePage />
 *     </div>
 *   );
 * }
 * 
 * @exports HomePage
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-08
 * @since 2.1
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Hero from '../homeSections/hero/Hero';
import CallToAction from '../homeSections/callToAction/CallToAction';
import TechSkills from '../homeSections/techSkills/TechSkills';
import JobExperience from '../homeSections/jobExperience/JobExperience';
import Interests from '../homeSections/interests/Interests';
import ProjectSection from '../homeSections/projects/ProjectSection';
import ContactForm from '../homeSections/contactForm/ContactForm';

import ReturnToTop from '../components/uiElements/ReturnToTop';

import { globals } from '../data/globals';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', ''); // Extract section ID from URL hash
      scroller.scrollTo(sectionId, {
        offset: globals.ScrollLink.offset + 15, // Adjust this offset based on your fixed navbar height
        duration: globals.ScrollLink.duration,
        spy: true,
        smooth: true,
      });
    }
  }, [location]);

  return (
    <>
      <div id='Home'>
        <Hero />
        <CallToAction />
      </div>
      <div id='Experience'>
        <TechSkills />
        <JobExperience />
        <Interests />
      </div>
      <div id='Projects'>
        <ProjectSection />
      </div>
      <div id='ContactMe'>
        <ContactForm />
      </div>
      <ReturnToTop />
    </>
  );
};

export default HomePage;
