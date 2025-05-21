/**
 * @file SkillBoxContainer.jsx
 * @module SkillBoxContainer
 * @desc React component that displays a grid of SkillBox components. 
 * It accepts a stack of skills and renders each skill using the SkillBox component.
 *
 * @example
 * // Example usage of SkillBoxContainer component
 * import SkillBoxContainer from './SkillBoxContainer';
 * 
 * function Example() {
 *   const stack = [
 *     { name: 'React', icon: SiReact, color: 'blue' },
 *     { name: 'JavaScript', icon: SiJavascript, color: 'yellow' },
 *     // Other skills
 *   ];
 *   
 *   return (
 *     <div className="App">
 *       // Other components
 *       <SkillBoxContainer stack={stack} />
 *     </div>
 *   );
 * }
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import React from 'react';
import SkillBox from './SkillBox';

function SkillBoxContainer({ stack, isSmall=false }) {

  const containerClass = isSmall ? "grid-cols-2  md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4";

  return (
    <div className="py-2">
      {stack && stack.length > 0 && (
        <div className={`grid text-sm md:text-base gap-4  ${containerClass}`}>
          {stack.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillBoxContainer;
