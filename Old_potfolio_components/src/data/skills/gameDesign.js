/**
 * @file gameDesign.js
 * @module gameDesign
 * @desc Contains data for the Game Design skills section.
 * 
 * @name Game Design
 * @since 2.1
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import IconSkills from "../iconSkills";

/**
 * Represents the Game Design skills section.
 * @type {Object}
 * @property {string} id - The unique identifier for the Game Design section.
 * @property {string} name - The name of the skills section.
 * @property {string} linkName - The text for the link to see more about Game Design.
 * @property {React.ReactNode} description - A brief description of the Game Design skills.
 * @property {Array<React.Component>} topSkills - The list of top skills with their respective icons.
 * @property {Array<React.Component>} minorSkills - The list of minor skills with their respective icons.
 */
export const gameDesign = { 
  id: "game-design",
  name: "Game Design", 
  linkName: "See More Game Design", 
  description: (
    <span>
      I design and develop engaging games, blending creativity and technical skills with teamwork to create fun and immersive experiences.    
    </span>
  ),
  topSkills: [
    IconSkills.UNITY,
    IconSkills.BLENDER,
    IconSkills.CSHARP,
    IconSkills.ANIMATION,
  ],
  minorSkills: [
    IconSkills.GAME_DEVELOPMENT,
    IconSkills.UNITY_PHYSICS,
    IconSkills.PLASTIC_SCM,
  ],
};
