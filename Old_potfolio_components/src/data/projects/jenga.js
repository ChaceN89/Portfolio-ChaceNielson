/**
 * @file jenga.js
 * @module jenga
 * @desc Contains data for the Jenga project.
 * 
 * @name Jenga
 * 
 * @example
 * // Example usage of jenga data in a component
 * import { jenga } from './jenga';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{jenga.name}</h2>
 *       <div>{jenga.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports jenga
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-21
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Virtual Jenga using haptics built in Unity Game Engine.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project features a Haptic Jenga game developed with Unity and C#. It utilizes a haptic pen and the OpenHaptics toolkit to deliver tactile feedback, providing users with a tangible interaction experience.
    </p>
    <p>
      Simulating the traditional Jenga game, players can manipulate blocks using the haptic pen, experiencing realistic touch sensations. This project showcases the integration of haptic technology in game development, significantly enhancing the user's immersive experience.
    </p>
  </div>
);

export const jenga = {
  id: "jenga",
  name: "Virtual Jenga",
  tag: "Game",
  blurb: short,
  description: long,
  images: [
    { src: "jenga5.jpg", blurhash: "LJFiSzt700WB00Rj~pof?uofMeWB" },
    { src: "jenga4.jpg", blurhash: "LCIhpix[00M|00M{~pt7?vt7Meae" },
    { src: "jenga3.jpg", blurhash: "L1MH}c%M?^%g?vfkbHfQ%#j[H?ay" },
    { src: "jenga2.jpg", blurhash: "LNCZ@QRQ8wRj00xu-;t7~WM{OXRj" },
    { src: "jenga1.jpg", blurhash: "LaK-,:fkIuoL9haykDWB.Aof%Lof" },
  ],
  youtubeEmbed: "https://www.youtube.com/watch?v=e-xqfE_f2uc",
  mainStack:[
    IconSkills.UNITY,
    IconSkills.CSHARP,
  ],
  extendedStack:[
    IconSkills.GIT,
    IconSkills.UNITY_PHYSICS,
    IconSkills.OPEN_HAPTICS,
    IconSkills.HAPTIC_STYLUS,
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/Haptic-Jenga", icon: IconSkills.GITHUB.icon },
    { name: "Report", pdf: "Jenga Report.pdf", icon: IconSkills.PDF.icon }
  ],
};
