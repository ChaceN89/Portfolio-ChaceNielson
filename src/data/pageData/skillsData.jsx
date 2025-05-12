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

import { frontend } from '../techStacks/frontend';
import { backend } from '../techStacks/backend';
import { gameDesign } from '../techStacks/game-design';
import { devOps } from '../techStacks/devOps';
import { fullstack } from '../techStacks/full-stack';

// Data for the skill page header
export const skillPageData = {
  title: "Technical Skills",
  description: "A deeper dive into my technical expertise. Click on a specialization to learn more.",
  relatedProjectTitle: "Related Projects",
};

// Data for various technical skills
export const techSkills = [
  frontend,
  backend,
  gameDesign,
  devOps,
  fullstack,
];

