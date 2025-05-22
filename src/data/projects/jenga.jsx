/**
 * @file jenga.js
 * @module jenga
 * @desc Contains data for the Jenga project.
 * 
 * @name Jenga
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 27th, 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "Virtual Jenga built in Unity, featuring haptic feedback and realistic physics.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>Virtual Jenga</BoldSpan> is a haptics-driven game developed in <BoldSpan>Unity</BoldSpan> with <BoldSpan>C#</BoldSpan>, designed to replicate the traditional Jenga experience in a virtual environment. The game utilizes a tactile <BoldSpan>haptic stylus</BoldSpan> powered by the <BoldSpan>OpenHaptics toolkit</BoldSpan>, delivering a realistic sense of touch for block manipulation.
    </p>
    <p>
      Players can interact with the blocks using the haptic pen, experiencing tactile feedback that mimics the sensation of touching, pulling, and balancing blocks in real-time. This integration of haptic technology enhances the immersion, allowing users to feel the weight and texture of the virtual blocks as they play.
    </p>
    <p>
      Setting up the physics in Unity was a critical component of this project. Using <BoldSpan>Unity's Physics Engine</BoldSpan>, the blocks were carefully modeled to behave like their real-world counterparts, creating a simulation of weight, friction, and collisions. The physics system seamlessly interacts with the haptic feedback, ensuring that every touch and movement feels natural and responsive.
    </p>
  </div>
);

export const jenga = {
  id: "jenga",
  name: "Virtual Jenga",
  tags: ["Game", "Unity", "Haptics"],
  blurb: short,
  description: long,
  hidePhotos: true,
  images: [
    { src: "jenga5.jpg", blurhash: "LJFiSzt700WB00Rj~pof?uofMeWB" },
    { src: "jenga4.jpg", blurhash: "LCIhpix[00M|00M{~pt7?vt7Meae" },
    { src: "jenga3.jpg", blurhash: "L1MH}c%M?^%g?vfkbHfQ%#j[H?ay" },
    { src: "jenga2.jpg", blurhash: "LNCZ@QRQ8wRj00xu-;t7~WM{OXRj" },
    { src: "jenga1.jpg", blurhash: "LaK-,:fkIuoL9haykDWB.Aof%Lof" },
  ],
  youtubeEmbed: "https://www.youtube.com/watch?v=e-xqfE_f2uc",
  mainStack:[
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
  ],
  extendedStack:[
    IconLibrary.GIT,
    IconLibrary.UNITY_PHYSICS,
    IconLibrary.OPEN_HAPTICS,
    IconLibrary.HAPTIC_STYLUS,
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/Haptic-Jenga", icon: IconLibrary.GITHUB.icon },
    { name: "Report", pdf: "Jenga Report.pdf", icon: IconLibrary.PDF.icon }
  ],
};
