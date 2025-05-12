/**
 * @file gameDesign.js
 * @desc Contains data for the game Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import IconLibrary from "../iconLibrary";


export const gameDesign = { 
  id: "game-development",
  name: "Game Development", 
  description: "I create games that feel great to play — responsive, immersive, and thoughtfully designed from code to controls.",

  longDescription: "From animated elements that make sites stand out to complex, data-driven applications with dynamic user interactions, I develop full stack solutions across the entire web stack. My work spans static homepages, RESTful APIs, and integrated platforms with external databases, user authentication, and modern deployment pipelines on AWS and Vercel. I focus on creating seamless experiences that are both functional and visually engaging.",

  commonTools: [
    IconLibrary.UNITY,
    IconLibrary.BLENDER,
    IconLibrary.PLASTIC_SCM,
    IconLibrary.CSHARP,
    IconLibrary.GITHUB,
    IconLibrary.PYTHON,
    IconLibrary.GAME_DESIGN,

    // Odin Inspecotor 
    // collaboration
    // SOFTWARE_ARCHITECTURE
    // DOCUMENTATION

    
  ],
  minorSkills: [
    {
      category: "Game Design",
      skills: [
        IconLibrary.GAME_DESIGN,
        IconLibrary.ANIMATION,
        IconLibrary.PATHFINDING,
        IconLibrary.UNITY_PHYSICS,
        IconLibrary.FACTORY_PATTERN,
        IconLibrary.OBSERVER_PATTERN,
        IconLibrary.FLYWEIGHT_PATTERN,
      ],
    },
    {
      category: "Game Development",
      skills: [
        IconLibrary.UNITY,
        IconLibrary.CSHARP,
        IconLibrary.GITHUB,
        IconLibrary.PLASTIC_SCM,
        IconLibrary.BLENDER,
        IconLibrary.PYTHON,
      ],
    },

  ],

};
