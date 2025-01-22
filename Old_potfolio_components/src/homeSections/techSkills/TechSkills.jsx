/**
 * @file TechSkills.js
 * @module TechSkills
 * @desc React component that displays the technical skills section with categories.
 * This component uses the BackgroundWrapper for the background, SlideTransition for animations, 
 * and SectionHeader for the section header. It maps through the techSkills data and renders SkillCategory components.
 *
 * @component TechSkills
 * 
 * @requires react
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires SectionWrapper from '../../components/uiElements/SectionWrapper'
 * @requires SkillCategory from './SkillCategory'
 * @requires techSkills, skillPageData from '../../data/pageData/skillsData'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of TechSkills component
 * import TechSkills from './TechSkills';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <TechSkills />
 *     </div>
 *   );
 * }
 * 
 * @exports TechSkills
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-29
 */
import React, { useState } from 'react';
import { techSkills, skillPageData } from '../../data/pageData/skillsData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SkillCategory from './SkillCategory';
import SectionWrapper from '../../wrappers/SectionWrapper';

function TechSkills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className='overflow-hidden'
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/abstract.png"}
      bgOpacity={20}
      backgroundSize = "contain"
      backgroundRepeat = "repeat"
    >
      <hr />
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

export default TechSkills;
