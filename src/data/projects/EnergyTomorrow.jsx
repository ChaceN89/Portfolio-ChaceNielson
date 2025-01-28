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

// Short description (blurb) to be displayed on the project card
const short = "A 3D city-building game focused on energy management and sustainability.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <span className="font-bold">Energy Tomorrow</span> is a 3D city-building simulation game where players take on the challenge of managing a city from an <span className="font-bold">energy perspective</span>. The game is developed using <span className="font-bold">Unity</span>, <span className="font-bold">Blender</span>, and <span className="font-bold">C#</span>, bringing an immersive and interactive experience to players.
    </p>
    <p>
      Players can design their city by placing components like <span className="font-bold">housing</span> and <span className="font-bold">roads</span>, while managing and upgrading <span className="font-bold">energy resources</span>. The game tracks critical metrics, including <span className="font-bold">energy output</span>, <span className="font-bold">energy consumption</span>, <span className="font-bold">city budget</span>, <span className="font-bold">pollution</span>, and <span className="font-bold">renewable energy percentage</span>, allowing players to see how their decisions impact the city’s growth and sustainability.
    </p>
    <p>
      Currently in its prototype phase, <span className="font-bold">Energy Tomorrow</span> aims to expand by incorporating <span className="font-bold">real-world data</span> for realistic city simulations. This feature will enable users to explore how energy solutions and infrastructure changes can impact actual cities.
    </p>
  </div>
);

export const energyTomorrow = {
  id: "energy-tomorrow",
  name: "Energy Tomorrow",
  tag: "Game",
  blurb: short,
  description: long,
  hidePhotos: true,
  images: [
    { src: "energyTomorrow0.jpg", blurhash: "L97Bima~RjbZ_NogWBay?boybHai" },
  ],
  youtubeEmbed: "https://www.youtube.com/watch?v=Uca8En3ZHH0",
  mainStack:[
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
    IconLibrary.BLENDER
  ],
};
