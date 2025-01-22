/**
 * @file ProjectSection.jsx
 * @module ProjectSection
 * @desc React component that renders a section displaying project cards.
 * This component uses BackgroundWrapper and SectionWrapper for layout
 * and applies a background image with adjustable opacity.
 *
 * @component ProjectSection
 * 
 * @requires react
 * @requires projects, projectPageData from '../../data/pageData/projectData'
 * @requires ProjectCard from './ProjectCard'
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires SectionWrapper from '../../components/uiElements/SectionWrapper'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of ProjectSection component
 * import ProjectSection from './ProjectSection';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <ProjectSection />
 *     </div>
 *   );
 * }
 * 
 * @exports ProjectSection
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-05
 * @since 2.1
 */

import React, { useState, useEffect } from 'react';
import { projects, projectPageData } from '../../data/pageData/projectData';
import ProjectCard from './ProjectCard';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionWrapper from '../../wrappers/SectionWrapper';

function ProjectSection() {

  // the initial number of cards to display based on screen width
  const getInitialCards = () => {
    const screenWidth = window.innerWidth;
  
    if (screenWidth > 1534) {
      return 8; // Greater than 1534px, show 8 projects initially
    } else if (screenWidth > 1024) {
      return 6; // Between 1024px and 1534px, show 6 projects initially
    } else if (screenWidth > 768) {
      return 3; // Between 768px and 1024px, show 3 projects initially
    } else {
      return 3; // 768px or less, show 3 projects initially
    }
  }
  
  // the number of additional cards to add when learn more is clicked based on screen width
  const getAdditionalCards =()=> {
    const screenWidth = window.innerWidth;
  
    if (screenWidth > 1534) {
      return 4; // Greater than 1534px, add 4 projects at a time
    } else if (screenWidth > 1024) {
      return 3; // Between 1024px and 1534px, add 3 projects at a time
    } else {
      return 3; // 1024px or less, add 3 projects at a time
    }
  }

  // Retrieve initial state from sessionStorage
  const getInitialVisibleCards = () => {
    const storedVisibleCards = sessionStorage.getItem('visibleCards');
    return storedVisibleCards ? parseInt(storedVisibleCards, 10) : getInitialCards();
  };

  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());
  const [additionalCards, setAdditionalCards] = useState(getAdditionalCards());

  useEffect(() => {
    const handleResize = () => {
      setAdditionalCards(getAdditionalCards());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the number of projects to display based on visible cards
  const visibleProjects = projects.slice(0, visibleCards);

  // Handle the 'View More...' button click
  const handleViewMore = () => {
    const newCards = visibleCards + additionalCards;
    setVisibleCards(newCards);
    sessionStorage.setItem('visibleCards', newCards);
  };

  return (
    <BackgroundWrapper 
      className='relative' 
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
      bgOpacity={40}
      backgroundAttachment = "scroll" // Change to scroll for better mobile support
      backgroundSize = "contain"
      backgroundRepeat = "repeat"
    >
      <SectionWrapper
        title={projectPageData.title}
        subtitle={projectPageData.description}
      >
        <div className='card-grid-wrapper'>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {visibleProjects.length < projects.length && (
          <button 
            onClick={handleViewMore} 
            className='w-full border-2 bg-frosted-glass text-secondary rounded-lg p-1.5 mt-6 hover:bg-opacity-70 hover:backdrop-blur-none hover:bg-secondary hover:text-primary'
          >
            View More...
          </button>
        )}
      </SectionWrapper>
      <hr />
    </BackgroundWrapper>
  );
}

export default ProjectSection;
