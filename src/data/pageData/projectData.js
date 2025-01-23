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

export const projectPageData = {
  title: "My Projects",
  description: "A collection of my projects showcasing a variety of skills and technologies.",
};

export const projects = [
  scaleTheDepths,
  glassGeckoGames,
  geoPredict,
  capstone,
  drillbotics,
  voiceIdentification,
  photoApp,
  genrePrediction,
  imageProcessor,
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
  id: "example-project",
  name: "Example Project",
  tag: "Web Development",
  blurb: "A short description of the example project.",
  description: (
    <div className='space-y-2'>
      <p>This is a detailed description of the example project, providing insights into the development process, technologies used, and key features implemented.</p>
    </div>
  ),
  youtubeEmbed: "youtube-embed link",
  images: [
    { src: "example1.jpg", blurhash: "L9AD+Zxu0z~pIVRjMxRj0L~q0La#" },
    { src: "example2.jpg", blurhash: "L6CFpEbH00D$^gRkozoJ_3oLx]jE" },
  ],
  mainStack: [
    IconSkills.REACT,
    IconSkills.NODEJS,
    // Add more icons as needed
  ],
  extendedStack: [
    IconSkills.TYPESCRIPT,
    IconSkills.MONGODB,
    // Add more icons as needed
  ],
  externalLinks: [
    { name: "GitHub", link: "https://github.com/example", icon: IconSkills.GITHUB.icon },
    { name: "Live Demo", link: "https://example.com", icon: IconSkills.WORLD.icon },
  ],
};

 */