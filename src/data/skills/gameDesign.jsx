/**
 * @file gameDesign.js
 * @desc Contains data for the game Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import React from 'react';
import IconLibrary from "../iconLibrary";

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
    IconLibrary.UNITY,
    IconLibrary.BLENDER,
    IconLibrary.PLASTIC_SCM,
    IconLibrary.CSHARP,
  ],
  minorSkills: [
    IconLibrary.GAME_DESIGN,
    IconLibrary.ANIMATION,
    IconLibrary.PATHFINDING,
    IconLibrary.UNITY_PHYSICS,
    IconLibrary.FACTORY_PATTERN,
    IconLibrary.OBSERVER_PATTERN,
    IconLibrary.FLYWEIGHT_PATTERN,
  ],
};
