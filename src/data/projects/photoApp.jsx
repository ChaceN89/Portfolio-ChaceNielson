/**
 * @file photoApp.js
 * @module photoApp
 * @desc Contains data for the Photo App project.
 * 
 * @name Photo App
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 27th, 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "A full-stack photo gallery app with user authentication and sharing capabilities.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>Aviar</BoldSpan> is a full-stack photo gallery application designed to help users upload, organize, and manage their photo collections effortlessly. Built with the <BoldSpan>MERN stack</BoldSpan> (MongoDB, ExpressJS, React, NodeJS), it provides a scalable and reliable platform for photo management.
    </p>
    <p>
      Key features include <BoldSpan>user authentication</BoldSpan>, <BoldSpan>photo categorization</BoldSpan>, and the ability to <BoldSpan>share collections</BoldSpan> with others. The application offers a responsive, user-friendly interface, ensuring seamless photo management across devices.
    </p>
    <p>
      This project showcases the power of the MERN stack for building comprehensive applications, combining scalability with intuitive design to create an efficient photo gallery solution.
    </p>
  </div>
);

export const photoApp = {
  id: "photo-app",
  name: "Photo Collection App",
  tags: ["Web App", "React", "MongoDB", "Express", "JavaScript"],
  blurb: short,
  description: long,
  thumbnail: {
    src: "photo2.jpg",
    blurhash: "LCAKgzxu00Sjx]xu.AWC_2t8Rks+",
  },
  images: [
    { src: "photo2.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "photo6.jpg", blurhash: "LG9@uBj[4nR..At8ogkC%Lt8xuad" },
    { src: "photo5.jpg", blurhash: "LGB;C8-n01IV?wtSs+t7gjjX-=xs" },
    { src: "photo4.jpg", blurhash: "LN9tisoI9Ft6?wofIot7tRogt7oz" },
    { src: "photo3.jpg", blurhash: "LGAdcs%L00NI?wxvoJkBx]o#-;$%" },
    { src: "photo1.jpg", blurhash: "LCAKgzxu00Sjx]xu.AWC_2t8Rks+" },
  ],
  youtubeID:"mktAIV4sjFQ",
  mainStack: [
    IconLibrary.REACT,
    IconLibrary.MONGODB,
    IconLibrary.EXPRESSJS,
  ],
  extendedStack: [
    IconLibrary.FULL_STACK,
    IconLibrary.AUTHENTICATION,
    IconLibrary.NODE_JS,
    IconLibrary.HTML,
    IconLibrary.CSS,
    IconLibrary.RESPONSIVE_DESIGN,
  ],
  externalLinks: [
    { name: "Overview", link: "https://www.youtube.com/watch?v=mktAIV4sjFQ", icon: IconLibrary.YOUTUBE.icon },
    { name: "Code", link: "https://github.com/ChaceN89/Aviar", icon: IconLibrary.GITHUB.icon },
  ],
};
