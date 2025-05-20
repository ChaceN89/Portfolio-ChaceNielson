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
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// data
import { projects } from '@/data/pageData/projectData'; // Assuming you have a file with project data

// components
import SkillBoxContainer from '@/components/uiElements/SkillBoxContainer';
import ExternalLinks from '@/components/homeSections/projects/ExternalLinks';
import ProjectImageCarousel from '@/components/homeSections/projects/ProjectImageCarousel';
import NotFoundInfo from '@/components/uiElements/NotFoundInfo';
import MediaFrame from '@/components/uiElements/mediaFrame/MediaFrame';

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
      <div className='space-y-1'>
        <h2 className='font-bold'>{project.name}</h2>
        <p className='text-darken'>{project.blurb}</p>

      </div>
      <ExternalLinks externalLinks={project.externalLinks} />

      <hr className="border-primary border-opacity-60 mb-4" />

      {/* Content */}
      <div className='flex  flex-col lg:flex-row gap-4'>

        <div className='lg:w-1/2'>
          <div className='black lg:hidden'>
    
            <DisplayVideo project={project} />
            
          </div>
          <div className='pb-2'>
            {project.description}
          </div>
          <SkillBoxContainer stack={fullStack} isSmall />
        </div>
        <div className='lg:w-1/2'>
          <div className='hidden lg:block'>
            <DisplayVideo project={project} />
          </div>  
          <ProjectImageCarousel images={project.images} id={project.id} title={project.name} hidePhotos={project.hidePhotos} />
        </div>
      </div>
    </div>
  );
}


// display for the video portion of the project modal
function DisplayVideo({project}){
  if(!project.video || !project.video.youtubeID) return null // display nothing
  return(
    <div className='pb-4'>
      <MediaFrame
        thumbnail={project.video.thumbnail}
        videoId={project.video.youtubeID} 
      />
    </div>
  )
}
