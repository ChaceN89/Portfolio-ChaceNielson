/**
 * @file ProjectSection.jsx
 * @module ProjectSection
 * @desc React component that renders a section displaying project cards.
 * This component uses BackgroundWrapper and SectionWrapper for layout
 * and applies a background image with adjustable opacity.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-05
 */
import React, { useState, useEffect } from 'react';
import { projects, projectPageData } from '../../../data/pageData/projectData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionWrapper from '../../wrappers/SectionWrapper';
import ProjectCard from './ProjectCard';
import {
  getInitialVisibleCards,
  getAdditionalProjects,
  saveToSessionStorage,
  addResizeListener,
  removeResizeListener,
} from '../../../utils/projectFuncs';

function ProjectSection() {
  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());
  const [additionalCards, setAdditionalCards] = useState(getAdditionalProjects());

  useEffect(() => {
    const handleResize = () => {
      setAdditionalCards(getAdditionalProjects());
    };

    addResizeListener(handleResize);
    return () => removeResizeListener(handleResize);
  }, []);

  const visibleProjects = projects.slice(0, visibleCards);

  const handleViewMore = () => {
    const newCards = visibleCards + additionalCards;
    setVisibleCards(newCards);
    saveToSessionStorage('visibleCards', newCards);
  };

  return (
    <BackgroundWrapper
      className='relative' 
      src={"/png-backgrounds/overlays/scratch-2.png"}
      bgOpacity={40}
      backgroundAttachment="scroll"
      backgroundSize="contain"
      backgroundRepeat="repeat"
    >
      <SectionWrapper
        title={projectPageData.title}
        subtitle={projectPageData.description}
      >
        <div className='card-grid-wrapper'>
          {visibleProjects.map((project, index) => (
            // <ProjectCard key={index} project={project} />
            <div className='w-full border-2 border-white p-10'>{project.name}</div>
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
