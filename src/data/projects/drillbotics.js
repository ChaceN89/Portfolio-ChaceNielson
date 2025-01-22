/**
 * @file drillbotics.js
 * @module drillbotics
 * @desc Contains data for the Drillbotics project.
 * 
 * @name Drillbotics
 *
 * @example
 * // Example usage of drillbotics data in a component
 * import { drillbotics } from './drillbotics';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{drillbotics.name}</h2>
 *       <div>{drillbotics.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports drillbotics
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Functional mini drill rig and real-time GUI.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project was a collaborative effort with the Drillbotics team at the University of Calgary to design and build a functional mini drill rig for the prestigious Drillbotics competition. Our rig was meticulously evaluated on its drilling performance, efficiency, and capabilities in data collection and visualization, leading our team to secure second place.
    </p>
    <p> 
      My primary responsibility was the development of a graphical user interface (GUI) that enabled real-time plotting of the drilling operations, recorded from the sensor. This GUI, built with Plotly Dash and Python, provided an intuitive and powerful platform for monitoring and analyzing the drilling process as it unfolded.
    </p>
  </div>
);

export const drillbotics = {
  starred: true,
  id: "drillbotics",
  name: "Drillbotics",
  tag: "Engineering",
  blurb: short,
  description: long,
  images: [
    { src: "drillbotics1.jpg", blurhash: "LAH-rkQ,yG-ncrO@%M0L=}00-iIB" },
    { src: "drillbotics0.jpg", blurhash: "L2Ps@p00~nS^00OT_2D*008^R;Di" },
    { src: "drillbotics2.jpg", blurhash: "L3HL6nIp?J9b~W^%010000aL?Fsk" },
    { src: "drillbotics3.jpg", blurhash: "L8FYcCR2%OR-#zk[D%D%x{it~W%M" },
    { src: "drillbotics4.jpg", blurhash: "LCGIJw-;oLRk~WR+IoayIr-oRj%1" },
    { src: "drillbotics5.jpg", blurhash: "L7GudjTH=v~D%$Io9a-:01%LR+D*" },
    { src: "drillbotics6.jpg", blurhash: "LAF=jk~p-p?a_3o#tQRjR5RkIoRi" },
  ],
  youtubeEmbed: "https://www.youtube.com/watch?v=5Z8g44RXl2c"  ,
  mainStack: [
    IconSkills.PLOTLY_DASH,
    IconSkills.PYTHON,
  ],
  extendedStack: [
    IconSkills.ENGINEERING,
    IconSkills.CIRCUITY,
    IconSkills.DATA_VISUALIZATION,
    IconSkills.SIMULATION,
    IconSkills.FABRICATION
  ],
  externalLinks: [
    { name: "GUI Example", link: "https://www.youtube.com/watch?v=xF9heykeFU4", icon: IconSkills.YOUTUBE.icon },
    { name: "The Competion", link: "https://drillbotics.com/winners/", icon: IconSkills.WORLD.icon },
  ],
};
