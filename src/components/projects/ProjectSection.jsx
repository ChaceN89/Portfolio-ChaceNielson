/**
 * @file ProjectSection.jsx
 * @module ProjectSection
 * @desc React component that renders a section displaying project cards.
 * This component uses BackgroundWrapper and SectionWrapper for layout
 * and applies a background image with adjustable opacity.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated may 22 2025
 */
import React, { useState, useEffect } from 'react';
import { projects } from '@/data/pageData/projectData';
import ProjectCard from './ProjectCard';
import {
  getInitialVisibleCards,
  getAdditionalProjects,
  saveToSessionStorage,
  addResizeListener,
  removeResizeListener,
} from '@/utils/projectFuncs';
import ProjectFilter from './ProjectFilter';

export default function ProjectSection() {
  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());
  const [additionalCards, setAdditionalCards] = useState(getAdditionalProjects());

  // handle the resize event to update the number of visible cards
  useEffect(() => {
    const handleResize = () => {
      setAdditionalCards(getAdditionalProjects());
    };

    addResizeListener(handleResize);
    return () => removeResizeListener(handleResize);
  }, []);


  const handleViewMore = () => {
    const newCards = visibleCards + additionalCards;
    setVisibleCards(newCards);
    saveToSessionStorage('visibleCards', newCards);
  };

  // get all the tags from the projects data
  const potentialTags = Array.from(
    new Set(projects.flatMap((proj) => proj.tags || []))
  ).sort();

  // save the selected tags based on the filter and filter for the projects that include those tags
  const [selectedTags, setSelectedTags] = useState([]);
  const filteredProjects = selectedTags.length
    ? projects.filter((proj) => selectedTags.every(tag => proj.tags.includes(tag)))
    : projects;

  // udpate  the visible projects based on the selected tags/filtered projects
  const visibleProjects = filteredProjects.slice(0, visibleCards);


  return (
   <div >
      <h2>My Side Projects</h2>
      <p>
        Here are some of my side projects that I have worked on. While they vary in size and scope, they all reflect my passion for coding and problem-solving. Click on the project name to view more details, or search for projects using specific tags.
      </p>
      <hr className='border-t-2 border-secondary dark:border-primary my-4' />

        <ProjectFilter
          tags={potentialTags}
          selectedTags={selectedTags}
          onChange={setSelectedTags}
        />
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {visibleProjects.map((project, index) => (
           <ProjectCard project={project} key={index} />
          ))}
        </div>
        {visibleProjects.length < filteredProjects.length && (
          <button 
            onClick={handleViewMore} 
            className='w-full border-2 bg-primary/80 dark:bg-secondary/80 hover:bg-accent/80 cursor-pointer  rounded-lg p-1.5 mt-6  max-w-md mx-auto flex justify-center items-center' 
          >
            View More...
          </button>
        )}
    </div>
  );
}