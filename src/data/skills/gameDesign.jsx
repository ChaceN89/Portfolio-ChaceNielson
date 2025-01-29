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
import { flappyBirdClone } from '../projects/flappyBirdClone';
import { jenga } from '../projects/jenga';
import { cubeGame } from '../projects/cubeGame';
import { capstone } from '../projects/capstone';
import { scaleTheDepths } from '../projects/ScaleTheDepths';
import { spaceSurvive } from '../projects/spaceSurvive';
import { energyTomorrow } from '../projects/EnergyTomorrow';

export const gameDesign = { 
  id: "game-development",
  name: "Game Development", 
  linkName: "Discover my Skills and Games", 
  description: "I craft captivating games by blending technical expertise, creativity, and collaboration, delivering fun and immersive experiences.",
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
  relatedProjects:[
    scaleTheDepths,
    energyTomorrow,
    jenga,
    capstone,
    spaceSurvive,
    flappyBirdClone,
    cubeGame,
  ]
};
