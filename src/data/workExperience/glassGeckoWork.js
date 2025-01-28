/**
 * @file glassGeckoWork.js
 * @module glassGeckoWork
 * @desc Contains data for the Glass Gecko Games work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, and soft skills.
 * 
 * @example
 * import { glassGeckoWork } from '../workExperience/glassGeckoWork';
 * 
 * @exports glassGeckoWork
 * 
 * @author Chace Nielson
 * @version 2.1
 * @created 2024-07-28
 * @updated 2024-08-09
 */

import IconLibrary from "../iconLibrary";

export const glassGeckoWork = {
  name: 'Glass Gecko Games',
  img: '/png-icons/glass-gecko-games-icon.png',
  description: 'Contributed to game development, website design, and marketing strategies. Collaborated closely with a team of designers and developers to design and implement game features.',
  role: 'Website Development, Game Design',
  dates: ['May 2024', 'Current'],
  link: 'https://glassgeckogames.com/',
  achievements: [
    'Led the development and launch of the company website, kickstarting the company’s marketing strategy.',
    'Collaborated on implementing a robust multiplayer networking system in Unity.',
  ],
  responsibilities: [
    'Worked closely with multidisciplinary teams of designers and developers on various projects.',
    'Led the design and development of the company website.',
    'Contributed to planning, marketing, and design meetings, ensuring alignment with project goals.',
    'Collaborated on resolving complex game design issues and challenges.',
  ],
  skills: [
    IconLibrary.UNITY,
    IconLibrary.PLASTIC_SCM,
    IconLibrary.CSHARP,
    IconLibrary.GAME_DESIGN,
    IconLibrary.WEB_DESIGN,
    IconLibrary.REACT,
  ], 
  softSkills: [
    IconLibrary.PROBLEM_SOLVING,
    IconLibrary.TEAM_COLLABORATION,
    IconLibrary.CREATIVITY,
    IconLibrary.COMMUNICATION,
  ],
};
