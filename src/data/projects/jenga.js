/**
 * @file jenga.js
 * @module jenga
 * @desc Contains data for the Jenga project.
 * 
 * @name Jenga
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import { BsGithub, BsYoutube } from "react-icons/bs";
import { FaUnity } from "react-icons/fa";

// Short description (blurb) to be displayed on the project card
const short = "Haptic Jenga built using Unity and C#.";

//Long description for the modal page, providing detailed information about the project
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
  name: "Jenga",
  tag: "Game Development",
  blurb: short,
  description: long,
  images: [
    { src: "jenga5.jpg", blurhash: "LJFiSzt700WB00Rj~pof?uofMeWB" },
    { src: "jenga4.jpg", blurhash: "LCIhpix[00M|00M{~pt7?vt7Meae" },
    { src: "jenga3.jpg", blurhash: "L1MH}c%M?^%g?vfkbHfQ%#j[H?ay" },
    { src: "jenga2.jpg", blurhash: "LNCZ@QRQ8wRj00xu-;t7~WM{OXRj" },
    { src: "jenga1.jpg", blurhash: "LaK-,:fkIuoL9haykDWB.Aof%Lof" },
  ],
  mainStack:[
    { name: "Unity", icon: FaUnity, color: "black" },
    { name: "C#", svg_path: "c-sharp.svg" }
  ],
  extendedStack:[
    { name: "Unity Physics System", svg_path: "physics.svg" },
    { name: "Open Haptics", svg_path: "haptics.svg" },
    { name: "Haptic Stylus", svg_path: "stylus.svg" },
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/Haptic-Jenga", icon: BsGithub },
    { name: "Video", link: "https://www.youtube.com/watch?v=e-xqfE_f2uc", icon: BsYoutube },
  ],
};
