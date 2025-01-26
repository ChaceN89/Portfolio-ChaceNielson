/**
 * 
 */

//React
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';

// Icons
import { FaArrowAltCircleDown } from "react-icons/fa";

// data
import { projects } from '../../data/pageData/projectData'; // Assuming you have a file with project data

// components
import SectionHeader from '../uiElements/SectionHeader';
import YouTubeEmbed from '../homeSections/projects/YouTubeEmbed';
import ProjectImageCarousel from '../homeSections/projects/ProjectImageCarousel';
import SkillBoxContainer from '../uiElements/SkillBoxContainer';
import ExternalLinks from '../homeSections/projects/ExternalLinks';

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

  // Scroll to the images section
  const scrollToImages = () => {
    scroller.scrollTo("skillBoxContainer", {
      containerId: "project-modal-container", // reference to id in parent container
      smooth: true
    });
  };


  const fullStack = project.extendedStack ? [...project.mainStack, ...project.extendedStack] : project.mainStack;


  return (
    <div  className="text-primary">
      <div className="py-1">
        <SectionHeader title={project.name} subtitle={project.blurb} />
      </div>
      <div className=" flex flex-wrap flex-col-reverse items-start sm:items-center sm:flex-row justify-start py-2">

        <ExternalLinks externalLinks={project.externalLinks} />
      </div>

      <hr className="border-primary border-opacity-60" />

      {/* description */}
      <div className="py-4">{project.description}</div>

      <YouTubeEmbed youtubeEmbed={project.youtubeEmbed} />

      {/* images */}
      {project.images && project.images.length > 0 && (
        <div className="pt-4 flex w-full justify-center">
          <ProjectImageCarousel images={project.images} id={project.id} title={project.name} />
        </div>
      )}

      {/* Skill Icons */}
      <Element name="skillBoxContainer">
        <SkillBoxContainer stack={fullStack} />
      </Element>

    </div>
  );
}
