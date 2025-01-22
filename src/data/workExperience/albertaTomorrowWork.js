/**
 * @file albertaTomorrowWork.js
 * @module albertaTomorrowWork
 * @desc Contains data for the Alberta Tomorrow work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, and soft skills.
 * 
 * @example
 * import { albertaTomorrowWork } from '../workExperience/albertaTomorrowWork';
 * 
 * @exports albertaTomorrowWork
 * 
 * @author Chace Nielson
 * @version 2.1
 * @created 2024-07-29
 * @updated 2024-08-09
 */

import IconSkills from "../iconSkills";

export const albertaTomorrowWork = { // Alberta Tomorrow
  name: 'Alberta Tomorrow',
  role: 'Software Developer',
  img: process.env.PUBLIC_URL + '/png-icons/alberta-tomorrow.jpg',
  dates: ['Jan 2024', 'Current'],
  description: 'Contributed to the development of a web application that leverages interactive maps, data visualization, and gamification to promote sustainable land use in Alberta and BC.',
  link: 'https://www.albertatomorrow.ca',
  achievements: [
    "Improved a simulation tool to visualize and analyze sustainable land use scenarios.",
    "Integrated features with Mapbox API, enhancing the application's interactive mapping capabilities."
  ],
  responsibilities: [
    "Collaborated with a team to design and implement key features for the web application.",
    "Worked closely with stakeholders to ensure project goals aligned with objectives.",
    "Assisted in managing project resources to meet deadlines and budget constraints." 
 ],
  skills: [
    IconSkills.AWS,
    IconSkills.VUE,
    IconSkills.MAPBOX_GL,
    IconSkills.CSS,
  ],
  softSkills: [
    IconSkills.PROBLEM_SOLVING,
    IconSkills.ADAPTABILITY,
    IconSkills.TIME_MANAGEMENT,
    IconSkills.SELF_MOTIVATION,
  ],
};
