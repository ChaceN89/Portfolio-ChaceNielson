/**
 * @file skillPageData.js
 * @module skillPageData
 * @desc Contains data for the technical skills section of the application.
 * This data includes various technical skills categorized by type, including web design, backend design, engineering, and game design.
 * Each skill category includes a description, top skills with icons, and minor skills.
 * 
 * @requires react
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of skillPageData in a component
 * import { techSkills } from './skillPageData';
 * 
 * function SkillsSection() {
 *   return (
 *     <div>
 *       {techSkills.map(skill => (
 *         <div key={skill.id}>
 *           <h3>{skill.name}</h3>
 *           <p>{skill.description}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * @exports skillPageData
 * @exports techSkills
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-21
 * @since 2.1
 */

import { webDesign } from '../skills/webDesign';
import { backendDesign } from '../skills/backendDesign';
import { engineering } from '../skills/engineering';
import { gameDesign } from '../skills/gameDesign';

// Data for the skill page header
export const skillPageData = {
  title: "Technical Skills",
  description: "A comprehensive overview of my technical expertise.",
};

// Data for various technical skills
export const techSkills = [
  webDesign,
  backendDesign,
  gameDesign,
  engineering
];
