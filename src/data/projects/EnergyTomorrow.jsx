/**
 * @file EnergyTomorrow.js
 * @module EnergyTomorrow
 * @desc Contains data for the Energy Tomorrow project.
 * 
 * @name Jenga
 * 
 * @author Chace Nielson
 * @created Jan 27th, 2025
 * @updated Jan 27th, 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "A 3D city-building game focused on energy management and sustainability.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>Energy Tomorrow</BoldSpan> is a 3D city-building simulation game where players take on the challenge of managing a city from an <BoldSpan>energy perspective</BoldSpan>. The game is developed using <BoldSpan>Unity</BoldSpan>, <BoldSpan>Blender</BoldSpan>, and <BoldSpan>C#</BoldSpan>, delivering an immersive and interactive experience.
    </p>
    <p>
      Players can design their city by placing components like <BoldSpan>housing</BoldSpan> and <BoldSpan>roads</BoldSpan> while managing and upgrading <BoldSpan>energy resources</BoldSpan>. The game tracks critical metrics, including energy output, energy consumption, city budget, pollution, and renewable energy percentage, allowing players to see how their decisions impact the city’s growth and sustainability.
    </p>
    <p>
      Currently in its prototype phase, <BoldSpan>Energy Tomorrow</BoldSpan> aims to expand by incorporating <BoldSpan>real-world data</BoldSpan> for realistic city simulations. This feature will enable users to explore how energy solutions and infrastructure changes can impact actual cities.
    </p>
  </div>
);

export const energyTomorrow = {
  id: "energy-tomorrow",
  name: "Energy Tomorrow",
  tags: ["Game", "Simulation", "Unity", "C#"],
  blurb: short,
  description: long,
  thumbnail: {
    src: "energyTomorrow0.jpg",
    blurhash: "L97Bima~RjbZ_NogWBay?boybHai",
  },
  youtubeID: "Uca8En3ZHH0", // youtube video - thumbnail is used as a placeholder while loading the video
  mainStack:[
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
    IconLibrary.BLENDER
  ],
};
