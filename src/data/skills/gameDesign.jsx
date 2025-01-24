/**
 * @file gameDesign.js
 * @desc Contains data for the game Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import React from 'react';
import IconSkills from "../iconLibrary";

export const gameDesign = { 
  id: "game-development",
  name: "Game Development", 
  linkName: "Discover my Skills and Games", 
  description: (
    <span> 
      I design and develop captivating games by blending technical expertise, creativity, and collaboration to create fun and immersive experiences.
    </span>
  ),
  topSkills: [
    IconSkills.UNITY,
    IconSkills.BLENDER,
    IconSkills.PLASTIC_SCM,
    IconSkills.CSHARP,
  ],
  minorSkills: [
    IconSkills.GAME_DESIGN,
    IconSkills.ANIMATION,
    IconSkills.PATHFINDING,
    IconSkills.UNITY_PHYSICS,
    IconSkills.FACTORY_PATTERN,
    IconSkills.OBSERVER_PATTERN,
    IconSkills.FLYWEIGHT_PATTERN,
  ],
};
