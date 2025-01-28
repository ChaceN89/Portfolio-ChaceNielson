/**
 * @file SkillBox.jsx
 * @module SkillBox
 * @desc React component that displays an individual skill with an icon and name.
 * This component handles rendering either a React icon or an SVG image, with a conditional
 * check to adjust the icon color if it is white in the ShowIcon component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.skill - The skill object containing the icon, name, color, and svg_path.
 * @param {React.Component} [props.skill.icon] - The React component for the skill icon (optional).
 * @param {string} props.skill.name - The name of the skill.
 * @param {string} props.skill.color - The color of the skill icon.
 * @param {string} [props.skill.svg_path] - The path to the SVG icon (optional).
 * @param {boolean} [props.useWhiteText=false] - Flag to determine if white text should be used.
 *
 * @example
 * // Example usage of SkillBox component
 * import SkillBox from './SkillBox';
 * import { SiReact } from 'react-icons/si';
 *
 * function Example() {
 *   const skill = {
 *     name: "React",
 *     icon: SiReact,
 *     color: "blue"
 *   };
 *   
 *   return (
 *     <div className="App">
 *       // Other components
 *       <SkillBox skill={skill} />
 *     </div>
 *   );
 * }

 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-14
 */
import React from 'react';
import ShowIcon from './ShowIcon';

const SkillBox = ({ skill, useWhiteText = false }) => {
  return (
    <div className="flex flex-col items-center p-2 border border-primary border-opacity-80 rounded-md shadow-md shadow-primary bg-secondary backdrop-blur-sm bg-opacity-20">
      <ShowIcon skill={skill} size="2.5rem" useWhiteText={useWhiteText} />
      <p className="mt-2 text-center text-sm">{skill.name}</p>
    </div>
  );
};

export default SkillBox;
