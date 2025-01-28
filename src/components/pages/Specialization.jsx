/**
 * @file Specialization.jsx
 * @module Specialization
 * @description A React component that renders the details of a specific specialization.
 * This component receives a `specializationID` prop and displays relevant skill information.
 * It redirects to the home page if the specialization is not found.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2025-01-26
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { techSkills, skillPageData } from '../../data/pageData/skillsData';
import SectionHeader from '../uiElements/SectionHeader';
import SkillBoxContainer from '../uiElements/SkillBoxContainer';
import ProjectCard from '../homeSections/projects/ProjectCard';
import FadeTransition from '../animations/FadeTransition';

export default function Specialization({ specializationID }) {
  const navigate = useNavigate();

  // Find the skill matching the specializationID
  const skill = techSkills.find(
    (s) =>
      s.id.toLowerCase().replace(/\s+/g, '-') === specializationID.toLowerCase()
  );

  // Redirect to home if no matching skill is found
  if (!skill) {
    navigate('/');
    return null;
  }

  // Combine topSkills and minorSkills for display
  const allSkills = skill.topSkills
    ? [...skill.topSkills, ...skill.minorSkills]
    : skill.topSkills;

  return (
    <div className="text-primary">
      <div className="py-1">
        <SectionHeader title={skill.name} subtitle={skill.description} />
      </div>

      <hr className="border-primary border-opacity-60 mb-4" />

      <SkillBoxContainer stack={allSkills} />
      
      <FadeTransition duration={1.5}>
        {skill.relatedProjects && skill.relatedProjects.length > 0 && (
          <>
            <h3 className="my-2 pt-2 underline">Related Projects</h3>
            <div className="mt-4  grid lg:grid-cols-2 gap-4">
              {skill.relatedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </>
        )}
      </FadeTransition>
    </div>
  );
}
