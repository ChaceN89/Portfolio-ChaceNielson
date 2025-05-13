/**
 * @file FeaturedProjects.jsx
 * @module components/sections/FeaturedProjects
 * @desc Displays featured projects with individual background themes using BackgroundWrapper.
 *
 * @author Chace Nielson
 * @created May 13, 2025
 * @updated May 13, 2025
 */

import React from 'react';
import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import { featuredProjects } from '@/data/pageData/projectData';
import ScrollWheelBtn from '@/components/uiElements/ScrollWheelBtn';
import FeatureSection from './FeatureSection';

export default function FeaturedProjects() {


  // Light
  const backgrounds = [
    {src: "/backgrounds/light-accent.jpg", textColor: "text-primary", bgColor: "bg-accent/20"},
    {src: "/backgrounds/light-primary.jpg", textColor: "text-secondary", bgColor: "bg-primary/20"},
    {src: "/backgrounds/light-secondary.jpg", textColor: "text-primary", bgColor: "bg-secondary/20"},
    {src: "/backgrounds/light-tertiary.jpg", textColor: "text-secondary", bgColor: "bg-tertiary/20"},

  ]


  return (
    <div className='w-full'>
      <div className='flex flex-col'>
        {featuredProjects.map((project, index) => {
          const isLast = index === featuredProjects.length - 1;
          const nextId = isLast ? 'tech-stacks' : `featured-${featuredProjects[index + 1].id}`;

          return (
            <div className="relative" key={project.id}>
              <FeatureSection
                project={project}
                background={backgrounds[index % backgrounds.length]}
                isLast={isLast}
                nextId={nextId}
              />
            </div>
          );
        })}

      </div>
    </div>
  );
}


