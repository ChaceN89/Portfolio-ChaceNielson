/**
 * @file geothermalWork.js
 * @module geothermalWork
 * @desc Contains data for the Energi Simulation Centre for Geothermal Systems Research work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, and soft skills.
 * 
 * @example
 * import { geothermalWork } from '../workExperience/geothermalWork';
 * 
 * @exports geothermalWork
 * 
 * @author Chace Nielson
 * @version 2.1
 * @created 2024-07-28
 * @updated 2024-08-09
 */

import IconSkills from "../iconSkills";

export const geothermalWork = { // Geothermal
  name: 'Energi Simulation Centre for Geothermal Systems Research',
  role: 'Software Developer',
  img: process.env.PUBLIC_URL + '/png-icons/geothermal.png',
  dates: ['May 2022', 'Jan 2024'],
  description: 'Developed a web application to simulate geothermal systems and analyze drilling data. Managed a team of engineers and developers, ensuring the successful completion of project goals.',
  link: 'https://ucalgary.ca/labs/geothermal-energy/centre',
  achievements: [
    'Led the development of a web application using React and FastAPI to analyze geothermal wells.',
    'Awarded the Intern of Merit for exceptional performance.',
    'The application was successfully utilized to analyze geothermal wells in New Mexico and Germany.',
  ],
  responsibilities: [
    'Presented project progress and technical findings to stakeholders, ensuring alignment with project goals.',
    'Conducted comprehensive code reviews, providing constructive feedback to enhance code quality.',
    'Played a key role in interviewing and selecting candidates for new developer positions.',
  ],
  skills: [
    IconSkills.REACT,
    IconSkills.DOCKER,
    IconSkills.POSTGRESQL,
    IconSkills.FASTAPI,
  ],
  softSkills: [
    IconSkills.PROBLEM_SOLVING,
    IconSkills.TEAM_COLLABORATION,
    IconSkills.LEADERSHIP,
    IconSkills.SELF_MOTIVATION,
  ],
};
