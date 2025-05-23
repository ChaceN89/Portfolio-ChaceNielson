/**
 * @file Project.jsx
 * @module Project
 * @desc Displays details about a specific project, including its tech stack, media, and external links.
 * 
 * @author Chace Nielson
 * @created Jan 26, 2025
 * @updated May 20th, 2025
 */
//React
import React, { useEffect, useState } from 'react';

// data
import { projects } from '@/data/pageData/projectData'; // Assuming you have a file with project data

// components
import SkillBoxContainer from '@/components/uiElements/skillBox/SkillBoxContainer';
import ExternalLinks from '@/components/projects/ExternalLinks';
import ProjectImageCarousel from '@/components/projects/ProjectImageCarousel';
import NotFoundInfo from '@/components/uiElements/NotFoundInfo';
import MediaFrame from '@/components/uiElements/mediaFrame/MediaFrame';
import ModalHeader from '@/components/uiElements/ModalHeader';

export default function ProjectModal({ projectName }) {
  const [safeProjectName, setSafeProjectName] = useState(projectName);

  useEffect(() => {
    // Only update if a valid name is passed
    if (projectName) {
      setSafeProjectName(projectName);
    }
  }, [projectName]);

  const project = projects.find(
    (proj) =>
      proj.id.toLowerCase().replace(/\s+/g, '-') ===
      safeProjectName?.toLowerCase()
  );

  // Redirect to home if no matching project is found
  if (!project) {
    return <NotFoundInfo name={<b>Project</b>} />;
  }

  // Get the full stack by combining the main stack and extended stack
  const fullStack = project.extendedStack ? [...project.mainStack, ...project.extendedStack] : project.mainStack;


  return (
    <div  className="text-primary">
      <ModalHeader name={project.name}  />
      <ExternalLinks externalLinks={project.externalLinks} />

      <hr className="border-2 rounded-full border-primary border-opacity-60 mb-4" />

      {/* Content */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>

      {/* Description - Always first */}
      <div className='order-0'>{project.description}</div>

      {/* Video or Carousel */}
      {project.youtubeID ? (
        <>
          {/* Video - Top right */}
          <div className='order-1 xl:order-1'>
            <MediaFrame 
              thumbnail={project.thumbnail.src}
              videoId={project.youtubeID} 
            />
          </div>

          {/* Skills - Bottom left */}
          <div className='order-2 xl:order-2'>
            <SkillBoxContainer stack={fullStack} isSmall />
          </div>

          {/* Carousel - Bottom right */}
          <div className='order-3 xl:order-3 w-full flex justify-center'>
            <div className='w-full max-w-2xl'>
              <ProjectImageCarousel
                images={project.images}
                id={project.id}
                title={project.name}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Carousel - Top right */}
          <div className='order-1 xl:order-1 w-full flex justify-center'>
            <div className='w-full max-w-2xl'>
              <ProjectImageCarousel
                images={project.images}
                id={project.id}
                title={project.name}
              />
            </div>
          </div>

          {/* Skills - Bottom full-width */}
          <div className='order-2 xl:order-2 xl:col-span-2'>
            <SkillBoxContainer stack={fullStack} />
          </div>
        </>
      )}
    </div>
    </div>
  );
}

