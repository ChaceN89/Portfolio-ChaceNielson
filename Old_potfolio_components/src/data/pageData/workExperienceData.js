/**
 * @file workExperienceData.js
 * @module workExperienceData
 * @desc Contains data for professional experiences used in various parts of the application.
 * This data includes company names, roles, dates, images, descriptions, technologies, achievements, responsibilities, links, and soft skills.
 * 
 * @example
 * // Example usage of workExperienceData in a component
 * import { workExperienceList } from './workExperienceData';
 * 
 * function ExperienceSection() {
 *   return (
 *     <div>
 *       {workExperienceList.map((experience, index) => (
 *         <div key={index}>
 *           <h2>{experience.name}</h2>
 *           <p>{experience.role}</p>
 *           <p>{experience.skills[0].name}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * @exports workExperiencePageData, workExperienceList
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-14
 * @since 2.1
 */

import { glassGeckoWork } from "../workExperience/glassGeckoWork";
import { albertaTomorrowWork } from "../workExperience/albertaTomorrowWork";
import { geothermalWork } from "../workExperience/geothermalWork";

export const workExperiencePageData = {
  title: 'Work Experience',
  description: 'Technical work.',
};

export const workExperienceList = [
  albertaTomorrowWork,
  glassGeckoWork,
  geothermalWork,
];
