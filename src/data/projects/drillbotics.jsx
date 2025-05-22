/**
 * @file drillbotics.js
 * @module drillbotics
 * @desc Contains data for the Drillbotics project.
 * 
 * @name Drillbotics
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "Functional mini drill rig with a real-time GUI for performance monitoring and data visualization.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project was a collaborative effort with the <BoldSpan>Drillbotics team</BoldSpan> at the University of Calgary to design and build a functional <BoldSpan>mini drill rig</BoldSpan> for the prestigious <BoldSpan>Drillbotics competition</BoldSpan>. Our rig was meticulously evaluated on its drilling performance, efficiency, and capabilities in data collection and visualization, leading our team to secure <BoldSpan>second place</BoldSpan>.
    </p>
    <p> 
      My primary responsibility was the development of a <BoldSpan>graphical user interface (GUI)</BoldSpan> that enabled <BoldSpan>real-time plotting</BoldSpan> of the drilling operations, recorded from the sensor. This GUI, built with Plotly Dash and Python, provided an intuitive and powerful platform for monitoring and analyzing the drilling process as it unfolded.
    </p>
  </div>
);


export const drillbotics = {
  starred: true,
  id: "drillbotics",
  name: "Mini Drill Rig",
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
  youtubeEmbed: "https://www.youtube.com/watch?v=5Z8g44RXl2c",
  mainStack: [
    IconLibrary.PLOTLY_DASH,
    IconLibrary.PYTHON,
  ],
  extendedStack: [
    IconLibrary.ENGINEERING,
    IconLibrary.CIRCUITY,
    IconLibrary.DATA_VISUALIZATION,
    IconLibrary.SIMULATION,
    IconLibrary.FABRICATION
  ],
  externalLinks: [
    { name: "GUI Example", link: "https://www.youtube.com/watch?v=xF9heykeFU4", icon: IconLibrary.YOUTUBE.icon },
    { name: "Drillbotics Results for the 2023-2024 Competition", link: "https://drillbotics.com/winners/", icon: IconLibrary.WORLD.icon },
  ],
};
