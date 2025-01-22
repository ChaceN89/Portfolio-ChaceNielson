/**
 * @file engineering.js
 * @module engineering
 * @desc Contains data for the Engineering skills section.
 * 
 * @name Engineering
 * @since 2.1
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

/**
 * Represents the Engineering skills section.
 * @type {Object}
 * @property {string} id - The unique identifier for the Engineering section.
 * @property {string} name - The name of the skills section.
 * @property {string} linkName - The text for the link to see more about the engineering background.
 * @property {React.ReactNode} description - A brief description of the Engineering skills.
 * @property {Array<React.Component>} topSkills - The list of top skills with their respective icons.
 * @property {Array<React.Component>} minorSkills - The list of minor skills with their respective icons.
 */
export const engineering = { 
  id: "engineering",
  name: "Engineering", 
  linkName: "My Engineering Background", 
  description: (
    <span>
      Leveraging my Software Engineering degree, I excel in software development, data analysis, and simulation with a strong problem-solving mindset.
    </span>
  ),
  topSkills: [
    IconSkills.GITHUB,
    IconSkills.GIT,
    IconSkills.CPP,
    IconSkills.JAVA,
  ],
  minorSkills: [
    IconSkills.JUPYTER,
    IconSkills.HADOOP,
    IconSkills.APACHE_SPARK,
    IconSkills.VS_CODE,
    IconSkills.DESIGN_3D,
    IconSkills.DATA_ANALYSIS,
    IconSkills.LEADERSHIP,
    IconSkills.AUTOMATION,
    IconSkills.SIMULATION,
    IconSkills.CIRCUITY,
    IconSkills.FABRICATION,
  ],
};
