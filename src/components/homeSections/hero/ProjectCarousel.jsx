/**
 * @file ProjectCarousel.jsx
 * @module components/sections/ProjectCarousel
 * @desc Displays a horizontally scrolling list of project images using ImageComponent.
 * 
 * @author Chace Nielson
 * @created May 13, 2025
 * @updated May 13, 2025
 */

import React from 'react';
import { projects } from '@/data/pageData/projectData';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import './ProjectCarousel.styles.css';
import Tooltip from '@/components/uiElements/Tooltip';
import { openModal } from '@/utils/utils';
import { use } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProjectCarousel() {

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    openModal({
      type: 'project',
      id: id,
      navigate,
      location,
    });
  };


  return (
    <div className="project-carousel-container">
      <div className="project-carousel-track">
        {projects.concat(projects).map((project, index) => {
          const image = project.images?.[0];
          if (!image?.src) return null;

  

          return (
            <div onClick={()=>handleClick(project.id)} key={`${project.id}-${index}`} className="carousel-item ">
              <Tooltip
                text={project.name}
              >
                  
                  <ImageComponent
                    src={`/projects/${project.id}/${image.src}`}
                    blurHash={image.blurhash}
                    alt={project.name}
                    className="carousel-image"
                  />
                </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
