/**
 * @file TechSkills.js
 * @module TechSkills
 * @desc React component that displays the technical skills section with categories.
 * This component uses the BackgroundWrapper for the background, SlideTransition for animations, 
 * and SectionHeader for the section header. It maps through the techSkills data and renders SkillCategory components.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */
import React, { useState } from 'react';

// Data
import {skillPageData, techSkills} from '../../../data/pageData/skillsData'; 

// Components
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SkillCategory from './SkillCategory';
import SectionWrapper from '../../wrappers/SectionWrapper';

export default function TechSkills() {
  // For which of the categories is currently hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className='overflow-hidden'
      src={"/png-backgrounds/overlays/abstract.png"}
      bgOpacity={20}
      backgroundSize = "contain"
      backgroundRepeat = "repeat"
    >
      <hr/>
      <SectionWrapper
        title={skillPageData.title}
        subtitle={skillPageData.description}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {techSkills.map((category, index) => (
            <SkillCategory 
              key={index} 
              category={category} 
              index={index}
              hoverIndex={hoveredIndex}
              handleMouseEnter={() => setHoveredIndex(index)}
              handleMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </SectionWrapper>
      <hr />
    </BackgroundWrapper>
  );
}

