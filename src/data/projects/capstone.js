/**
 * @file capstone.js
 * @module capstone
 * @desc Contains data for the CO2 Separation Capstone project.
 * 
 * @name CO2 Separation
 * 
 * @example
 * // Example usage of capstone data in a component
 * import { capstone } from './capstone';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{capstone.name}</h2>
 *       <div>{capstone.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports capstone
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = <>Concept simulation and physical prototype for CO<sub>2</sub> separation device.</>;

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      This capstone project, titled "Energy Storage and Direct Air Capture in the Deep Ocean," was conducted at the University of Calgary to explore innovative methods for atmospheric CO<sub>2</sub> separation by leveraging deep ocean hydrostatic pressure. A secondary goal was to create a Unity simulation displaying the energy storage and CO<sub>2</sub> separation systems.
    </p>
    <p>
      Our team designed both a physical prototype and a comprehensive Unity simulation to validate and demonstrate the concept. The prototype was tested in a controlled pool environment, showcasing the device's potential.
    </p>
    <p>
      The Unity simulation further enhances this project by offering an interactive visualization of the energy storage system and its real-world applications. It allows users to explore the CO<sub>2</sub> separation process, the energy storage system, and the device's overall operation in detail.
    </p>
  </div>
);

export const capstone = {
  starred: true,
  id: "capstone", // id and folder name in the projects folder
  name: <span>CO<sub>2</sub> Separation Capstone</span>,
  tag: "Engineering",
  blurb: short,
  description: long,
  images: [
    { src: "highlight.jpg", blurhash: "LYEEK4o$t7od_6e.X7W=-_aJkBWr" },
    { src: "capstone1.jpg", blurhash: "LCCtg~4#5[xt~bkMITWU0C-s-qRj" },
    { src: "capstone2.jpg", blurhash: "L8HeI3D4^H_4~B=sDj^*-BH;00%L" },
    { src: "capstone3.jpg", blurhash: "LAD11#-;^dQ.}+?RS%E+=|kiV:I]" },
    { src: "capstone5.jpg", blurhash: "L3Ss50%g?aM{?aIV%Mxt00Mx_4t7" },
    { src: "capstone6_sim.jpg", blurhash: "LnD_REohbujd_7oxWBk8%Wobawf8" },
    { src: "capstone7_sim.jpg", blurhash: "LQEEl-NTX9t9~YRXtRa_^|bzb:i^" },
    { src: "capstone8_sim.jpg", blurhash: "LdEz+.kHT2ng_9t0oZkD%CoubWkC" },
  ],
  youtubeEmbed: "https://www.youtube.com/watch?v=TvnBOPB7dhc",
  mainStack: [
    IconSkills.UNITY,
    IconSkills.BLENDER,
    IconSkills.CSHARP,
  ],
  extendedStack: [
    IconSkills.SIMULATION,
    IconSkills.ENGINEERING,
    IconSkills.CIRCUITY,
    IconSkills.ANIMATION,
    IconSkills.LEADERSHIP,
    IconSkills.ADAPTABILITY,
    IconSkills.DESIGN_3D,
    IconSkills.FABRICATION,
  ],
  externalLinks: [
    { name: "Unity Simulation", link: "https://dev3933.d18ixp0pwlw4ex.amplifyapp.com/", icon: IconSkills.UNITY.icon },
    { name: "Poster", pdf: "Capstone Poster.pdf", icon: IconSkills.PDF.icon },
    { name: "Report", pdf: "Capstone Final Report.pdf", icon: IconSkills.PDF.icon }
  ],
};
