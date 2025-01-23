/**
 * @file SkillBoxContainer.jsx
 * @module SkillBoxContainer
 * @desc React component that displays a grid of SkillBox components. 
 * It accepts a stack of skills and renders each skill using the SkillBox component.
 *
 * @component SkillBoxContainer
 *
 * @param {Object} props - The component props.
 * @param {Array} props.stack - An array of skill objects to be displayed.
 *
 * @requires react
 * @requires ./SkillBox
 *
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
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
 * @exports SkillBoxContainer
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-08-14
 */

import React from 'react';
import SkillBox from './SkillBox';

function SkillBoxContainer({ stack }) {
  return (
    <div className="p-4">
      {stack && stack.length > 0 && (
        <div className="grid text-sm md:text-base grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-4">
          {stack.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillBoxContainer;
