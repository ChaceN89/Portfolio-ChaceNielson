/**
 * @file Project.jsx
 * @module Project
 * @desc Displays details about a specific project, including its tech stack, media, and external links.
 * 
 * @author Chace Nielson
 * @created Jan 26, 2025
 * @updated Jan 26, 2025
 */
//React
import React from 'react';
import { useNavigate } from 'react-router-dom';

// data
import { projects } from '../../data/pageData/projectData'; // Assuming you have a file with project data

// components
import SectionHeader from '../uiElements/SectionHeader';
import YouTubeEmbed from '../homeSections/projects/YouTubeEmbed';
import SkillBoxContainer from '../uiElements/SkillBoxContainer';
import ExternalLinks from '../homeSections/projects/ExternalLinks';
import ProjectImageCarousel from '../homeSections/projects/ProjectImageCarousel';

export default function Project({ projectName }) {
  const navigate = useNavigate();

  // Find the project matching the projectID
  const project = projects.find(
    (proj) =>
      proj.id.toLowerCase().replace(/\s+/g, '-') === projectName.toLowerCase()
  );

  // Redirect to home if no matching project is found
  if (!project) {
    navigate('/');
    return null;
  }

  // Get the full stack by combining the main stack and extended stack
  const fullStack = project.extendedStack ? [...project.mainStack, ...project.extendedStack] : project.mainStack;

  return (
    <div  className="text-primary">
      <SectionHeader title={project.name} subtitle={project.blurb} />
      <ExternalLinks externalLinks={project.externalLinks} />

      <hr className="border-primary border-opacity-60 mb-4" />

      {/* Content */}
      <div className='flex  flex-col lg:flex-row gap-4'>
        <div className='lg:w-1/2'>
          <div className='black lg:hidden'>
            <YouTubeEmbed youtubeEmbed={project.youtubeEmbed} />
          </div>
          <div className='pb-2'>
            {project.description}
          </div>
          <SkillBoxContainer stack={fullStack} isSmall />
        </div>
        <div className='lg:w-1/2'>
          <div className='hidden lg:block'>
            <YouTubeEmbed youtubeEmbed={project.youtubeEmbed} />
          </div>
          <ProjectImageCarousel images={project.images} id={project.id} title={project.name} hidePhotos={project.hidePhotos} />
        </div>
      </div>
    </div>
  );
}
