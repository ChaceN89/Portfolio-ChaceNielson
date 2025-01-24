/**
 * @file skillPageData.js
 * @module skillPageData
 * @desc Contains data for the technical skills section of the application, categorized by type (e.g., web design, backend design, engineering, game design).
 * 
 * @exports skillPageData
 * @exports techSkills
 * @author Chace Nielson
 * @created July 28, 2024
 * @updated Aug 21, 2024
 */

import { frontend } from '../skills/frontend';
import { backend } from '../skills/backend';
import { gameDesign } from '../skills/gameDesign';
import { devOps } from '../skills/devOps';

// Data for the skill page header
export const skillPageData = {
  title: "Technical Skills",
  description: "An In-Depth Look at My Technical Proficiency.",
  relatedProjectTitle: "Related Projects",
};

// Data for various technical skills
export const techSkills = [
  frontend,
  backend,
  gameDesign,
  devOps
];

