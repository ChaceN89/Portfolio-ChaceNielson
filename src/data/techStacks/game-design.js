/**
 * @file gameDesign.js
 * @desc Contains data for the game Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated May 21, 2025
 */

import IconLibrary from "../iconLibrary";

export const gameDesign = { 
  id: "game-development",
  name: "Game Development", 
  description: "I create games that feel great to play — responsive, immersive, and thoughtfully designed from code to controls.",

  longDescription: "From physics-driven mechanics and gameplay patterns to immersive shaders, audio, and animations, I develop games from the ground up. My workflow spans scripting, editor tooling, art integration, and production pipelines — ensuring systems are robust, intuitive, and fun to play.",

  commonTools: [
    IconLibrary.UNITY,             // Core engine
    IconLibrary.CSHARP,           // Primary scripting language
    IconLibrary.BLENDER,          // 3D modeling & animation
    IconLibrary.INSPECTOR_TOOLS,  // Advanced Unity editor tooling
    IconLibrary.SHADER_GRAPH,     // Technical art & VFX
    IconLibrary.GIMP,             // Pixel art and sprite animations
    IconLibrary.PLASTIC_SCM,      // Version control for Unity workflows
    IconLibrary.FMOD,             // Pro-level audio integration
  ],

  all: [
    {
      category: "Gameplay Systems",
      skills: [
        IconLibrary.UNITY_PHYSICS,
        IconLibrary.PATHFINDING,
        IconLibrary.FACTORY_PATTERN,
        IconLibrary.OBSERVER_PATTERN,
        IconLibrary.FLYWEIGHT_PATTERN,
      ],
    },
    {
      category: "Technical Art & Audio",
      skills: [
        IconLibrary.SHADER_GRAPH,
        IconLibrary.GIMP,
        IconLibrary.ANIMATION,
        IconLibrary.FMOD,
      ],
    },
    {
      category: "Development & Tooling",
      skills: [
        IconLibrary.UNITY,
        IconLibrary.CSHARP,
        IconLibrary.INSPECTOR_TOOLS,
        IconLibrary.BLENDER,
        IconLibrary.GITHUB,
        IconLibrary.PLASTIC_SCM,
      ],
    },
  ],
};
