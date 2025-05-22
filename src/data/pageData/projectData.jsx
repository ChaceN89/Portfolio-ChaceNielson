/**
 * @file projectData.js
 * @module projectData
 * @desc Contains an array of project objects imported from individual project files. Used for the project section of the application.
 * 
 * @exports projects
 * @exports projectPageData
 * @author Chace Nielson
 * @created July 28, 2024
 * @updated Sept 05, 2024
 */

import { albertaTomorrowHomepage } from "../projects/albertaTomorrow";
import { geoPredict } from "../projects/geoPredict";
import { capstone } from "../projects/capstone";
import { musicPlayer } from "../projects/musicPlayer";
import { portfolio } from "../projects/portfolio";
import { voiceIdentification } from "../projects/voiceIdentification";
import { imageProcessor } from "../projects/imageProcessor";
import { jobDashboard } from "../projects/jobDashboard";
import { photoApp } from "../projects/photoApp";
import { genrePrediction } from "../projects/genrePrediction";
import { jenga } from "../projects/jenga";
import { cubeGame } from "../projects/cubeGame";
import { flappyBirdClone } from "../projects/flappyBirdClone";
import { spaceSurvive } from "../projects/spaceSurvive";
import { glassGeckoGames } from "../projects/glassGecko";
import { drillbotics } from "../projects/drillbotics";
import { cardGenerator } from "../projects/CardGenerator";
import { scaleTheDepths } from "../projects/ScaleTheDepths";
import { dicom3dPrint } from "../projects/DICOM3dPrints";
import { energyTomorrow } from "../projects/EnergyTomorrow";
import { library } from "../projects/library";

export const featuredProjects = [
  albertaTomorrowHomepage,
  glassGeckoGames,
  scaleTheDepths,
  library,
]

export const carouselProjects = [
  albertaTomorrowHomepage,
  glassGeckoGames,
  energyTomorrow,
  geoPredict,
  dicom3dPrint,

]


export const projects = [
  albertaTomorrowHomepage,
  library,
  scaleTheDepths,
  energyTomorrow,
  capstone,
  dicom3dPrint,
  glassGeckoGames,
  geoPredict,
  drillbotics,
  imageProcessor,
  voiceIdentification,
  photoApp,
  genrePrediction,
  portfolio,
  cardGenerator,
  cubeGame,
  jenga,
  spaceSurvive,
  musicPlayer,
  flappyBirdClone,
  jobDashboard,
];


// example of a project object
/**

export const exampleProject = {
  id: "example-project", // Unique identifier seen by user in the URL
  name: "Example Project", // Name of the project on card and modal
  tag: "Web Development", // Tag appears on card to give brief context
  blurb: "A short description of the example project seen on the modal. Meant to be a summary.",
  description: ( // Long description of the project seen on the modal - can be styled with JSX for paragraphs, lists, etc.
    <div className='space-y-2'>
      <p>This is a detailed description of the example project, providing insights into the development process, technologies used, and key features implemented.</p>
    </div>
  ),
  youtubeEmbed: "youtube-embed link", // can be null if no video but direct link to yotube video if available
  hidePhotos: true, // doens't show photos in the modal 
  images: [
    { src: "example1.jpg", blurhash: "L9AD+Zxu0z~pIVRjMxRj0L~q0La#" },
    { src: "example2.jpg", blurhash: "L6CFpEbH00D$^gRkozoJ_3oLx]jE" },
  ],
  mainStack: [
    IconLibrary.REACT,
    IconLibrary.NODEJS,
    // Add more icons as needed
  ],
  extendedStack: [
    IconLibrary.TYPESCRIPT,
    IconLibrary.MONGODB,
    // Add more icons as needed
  ],
  externalLinks: [ // External links to the project, can be GitHub, live demo, or links to pdf if you use the pdf key
    { name: "GitHub", link: "https://github.com/example", icon: IconLibrary.GITHUB.icon },
    { name: "Report", pdf: "Capstone Final Report.pdf", icon: IconLibrary.PDF.icon }

  ],
};
*/