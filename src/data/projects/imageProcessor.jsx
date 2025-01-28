/**
 * @file imageProcessor.js
 * @module imageProcessor
 * @desc Contains data for the Image Task Queue project.
 * 
 * @name Image Task Queue
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 27th, 2025
 */

import IconLibrary from "../iconLibrary";

// Short description (blurb) to be displayed on the project card
const short = "Backend-focused image processing queue with FastAPI and multithreading.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <span className="font-bold">Image Task Queue</span> is a backend-centric application built with <span className="font-bold">FastAPI</span>, designed to process images asynchronously using an efficient task queue system. This project showcases the integration of advanced backend technologies to handle large-scale, multi-user image processing workflows.
    </p>
    <p>
      The system uses <span className="font-bold">multithreading</span> to manage concurrent tasks effectively, assigning each one an ID to track its progress. Images submitted by users are processed asynchronously, with the application keeping track of each task's progress and completion status.
    </p>
    <p>
      Deployed on <span className="font-bold">Railway</span> and then <span className="font-bold">Render</span>, the application is built for scalability and efficiency. While the frontend is minimal, the primary focus is on the robust backend architecture, designed to support concurrent users and deliver a smooth image processing experience.
    </p>
    <p>
      This project, while simple, demonstrates how to build and optimize a scalable task queue system using FastAPI, TypeScript, and Python, highlighting the seamless handling of asynchronous workflows for managing large volumes of image processing tasks.
    </p>
  </div>
);

export const imageProcessor = {
  starred: true,
  id: "image-processor",
  name: "Image Processor",
  tag: "Backend",
  blurb: short,
  description: long,
  images: [
    { src: "imageProcessor0.jpg", blurhash: "LFL$FtRP.S_N0]%MM_E14PRjQ-D%" },
    { src: "imageProcessor2.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
    { src: "imageProcessor1.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
    { src: "imageProcessor4.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
    { src: "imageProcessor5.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
    { src: "imageProcessor3.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
    { src: "imageProcessor6.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
    { src: "imageProcessor7.jpg", blurhash: "LFEseT-^{v9#LfUvK%%M2hD19[#8" },
  ],
  mainStack:[
    IconLibrary.REACT,
    IconLibrary.FASTAPI,
    IconLibrary.TYPESCRIPT,
  ],
  extendedStack:[
    IconLibrary.PYTHON,
    IconLibrary.RAILWAY,
    IconLibrary.RENDER,
  ],
  externalLinks: [
    { name: "Website", link: "https://main--img-processor.netlify.app/", icon: IconLibrary.WORLD.icon },
    { name: "Code", link: "https://github.com/ChaceN89/image-processor", icon: IconLibrary.GITHUB.icon },
  ],
};
