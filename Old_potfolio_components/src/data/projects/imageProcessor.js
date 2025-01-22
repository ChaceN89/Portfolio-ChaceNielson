/**
 * @file imageProcessor.js
 * @module imageProcessor
 * @desc Contains data for the Image Task Queue project.
 * 
 * @name Image Task Queue
 * 
 * @example
 * // Example usage of imageProcessor data in a component
 * import { imageProcessor } from './imageProcessor';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{imageProcessor.name}</h2>
 *       <div>{imageProcessor.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports imageProcessor
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Image processing task queue using React and FastAPI.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project is an image processing task queue built with React and FastAPI. Users can upload images for processing, which are managed efficiently in a queue. The application is developed using TypeScript and showcases the seamless integration of frontend and backend technologies to handle asynchronous image processing tasks.
    </p>
    <p>
      Deployed on Railway and Render, the system ensures efficient task management and provides a responsive user interface for monitoring the status of image processing jobs. It demonstrates robust handling of image processing workflows, delivering an effective solution for managing and processing large volumes of images asynchronously. 
    </p>
    <p>
      The frontend and functionality is simple as the main focus is the task queue in the backend using FastAPI. The application is designed to handle multiple users and tasks concurrently, ensuring efficient processing of images in a queue system.
    </p>
  </div>
);

export const imageProcessor = {
  starred: true,
  id: "image-processor",
  name: "Image Task Queue",
  tag: "Full-Stack",
  blurb: short,
  description: long,
  images: [
    { src: "imageProcessor.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
    { src: "imageProcessor2.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
    { src: "imageProcessor3.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
  ],
  mainStack:[
    IconSkills.REACT,
    IconSkills.FASTAPI,
    IconSkills.TYPESCRIPT,
  ],
  extendedStack:[
    IconSkills.PYTHON,
    IconSkills.RAILWAY,
    IconSkills.RENDER,
  ],
  externalLinks: [
    { name: "Website", link: "https://main--img-processor.netlify.app/", icon: IconSkills.WORLD.icon },
    { name: "Code", link: "https://github.com/ChaceN89/image-processor", icon: IconSkills.GITHUB.icon },
  ],
};
