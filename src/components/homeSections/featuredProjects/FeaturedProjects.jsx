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

export default function FeaturedProjects() {
  // 🎨 Pick your background theme


    // minimalist
  // const backgrounds = [
  //   "/backgrounds/computer-0-accent.jpg",
  //   "/backgrounds/computer-0-primary.jpg",
  //   "/backgrounds/computer-0-secondary.jpg",
  //   "/backgrounds/computer-0-tertiary.jpg",
  // ]

  // Light
  const backgrounds = [
    "/backgrounds/light-accent.jpg",
    "/backgrounds/light-primary.jpg",
    "/backgrounds/light-secondary.jpg",
    "/backgrounds/light-tertiary.jpg",
  ]

  // laptiop
  // const backgrounds = [
  //   "/backgrounds/laptop-accent.jpg",
  //   "/backgrounds/laptop-primary.jpg",
  //   "/backgrounds/laptop-secondary.jpg",
  //   "/backgrounds/laptop-tertiary.jpg",
  // ]

  return (
    <div className='w-full'>
      <h1 className='text-5xl font-bold text-center py-16'>Featured Work</h1>
      <div className='flex flex-col'>
        {featuredProjects.map((project, index) => (
          <FeatureSection
            key={project.id}
            project={project}
            background={backgrounds[index % backgrounds.length]}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureSection({ project, background }) {
  return (
    <BackgroundWrapper
      background={background}
      backgroundClass="w-screen"
      childClass="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[80vh] px-8 py-24"
      fixed
      // blur={2}
      noise
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <ImageComponent
          src={"projects/" +project.id +  "/" +project.images?.[0]?.src}
          alt={project.name}
          blurHash={project.images?.[0]?.blurhash}
          className="rounded-xl shadow-xl h-96 max-w-[90vw] object-cover border"
        />
      </div>
      <div className=" md:w-1/2 text-white space-y-4 rounded-[50px] w-10 backdrop-blur-2xl bg-black/20 p-8">
        <h2 className="text-4xl font-bold">{project.name}</h2>
        <p className="text-xl opacity-90">{project.blurb}</p>
        <div className="flex flex-wrap gap-2 pt-4">
          {project.mainStack?.map((icon, idx) => (
            <div key={idx} className="text-3xl">{icon.icon}</div>
          ))}
        </div>
      </div>
    </BackgroundWrapper>
  );
}
