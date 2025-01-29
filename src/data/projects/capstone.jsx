/**
 * @file capstone.js
 * @module capstone
 * @desc Contains data for the CO2 Separation Capstone project.
 * 
 * @name CO2 Separation
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 27, 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";


// Short description (blurb) to be displayed on the project card
const short = <>Concept simulation and prototype for CO<sub>2</sub> separation using hydrostatic pressure.</>;

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      This capstone project, titled "Energy Storage and Direct Air Capture in the Deep Ocean," was conducted at the University of Calgary to explore innovative methods for <BoldSpan>atmospheric CO<sub>2</sub> separation</BoldSpan>  by leveraging deep ocean hydrostatic pressure. A secondary goal was to create a Unity simulation displaying the energy storage and CO<sub>2</sub> separation systems.
    </p>
    <p>
      Our team designed both a physical prototype and a comprehensive <BoldSpan>Unity simulation</BoldSpan> to validate and demonstrate the concept. The prototype was tested in a controlled pool environment, showcasing the device's potential.
    </p>
    <p>
      The <BoldSpan>Unity simulation</BoldSpan> further enhances this project by offering an interactive visualization of the <BoldSpan>energy storage system </BoldSpan>and its real-world applications. It allows users to explore the CO<sub>2</sub> separation process, the energy storage system, and the device's overall operation in detail.
    </p>
  </div>
);

export const capstone = {
  starred: true,
  id: "capstone", // id and folder name in the projects folder
  name: <>Ocean CO<sub>2</sub> Condenser</>,
  tag: "Engineering",
  blurb: short,
  description: long,
  images: [
    { src: "capstone0.jpg", blurhash: "LlC8%[oOozfA_7owjFk8%oobj;jZ" },
    { src: "capstone1.jpg", blurhash: "LCCtd@4#5[xt_8kMITWU0C-s-qRj" },
    { src: "capstone2.jpg", blurhash: "L8HeI3D4^H_4~B=sDj^*-BH;00%L" },
    { src: "capstone3.jpg", blurhash: "LAD11#-;^dQ.}+?RS%E+=|kiV:I]" },
    { src: "capstone5.jpg", blurhash: "L3Ss50%g?aM{?aIV%Mxt00Mx_4t7" },
    { src: "capstone6.jpg", blurhash: "LnD_REohbujd_7oxWBk8%Wobawf8" },
    { src: "capstone7.jpg", blurhash: "LQEEl-NTX9t9~YRXtRa_^|bzb:i^" },
    { src: "capstone8.jpg", blurhash: "LdEz+.kHT2ng_9t0oZkD%CoubWkC" },
    { src: "capstone9.jpg", blurhash: "LdEz+.kHT2ng_9t0oZkD%CoubWkC" },
  ],
  youtubeEmbed: "https://www.youtube.com/watch?v=TvnBOPB7dhc",
  mainStack: [
    IconLibrary.UNITY,
    IconLibrary.BLENDER,
    IconLibrary.CSHARP,
  ],
  extendedStack: [
    IconLibrary.CPP,
    IconLibrary.SIMULATION,
    IconLibrary.ENGINEERING,
    IconLibrary.CIRCUITY,
    IconLibrary.ANIMATION,
    IconLibrary.ADAPTABILITY,
    IconLibrary.DESIGN_3D,
    IconLibrary.FABRICATION,
    IconLibrary.LEADERSHIP,
    IconLibrary.ADAPTABILITY,
  ],
  externalLinks: [
    { name: "Unity Simulation", link: "https://dev3933.d18ixp0pwlw4ex.amplifyapp.com/", icon: IconLibrary.UNITY.icon },
    { name: "Poster", pdf: "Capstone Poster.pdf", icon: IconLibrary.PDF.icon },
    { name: "Report", pdf: "Capstone Final Report.pdf", icon: IconLibrary.PDF.icon }
  ],
};
