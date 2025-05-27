/**
 * @file library.js
 * @module libary
 * @desc Contains data for the libaryr App project.
* 
 * @author Chace Nielson
 * @created Jan 28th, 2025
 * @updated Jan 29th, 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = <>A full-stack library platform with Google Sign-In, nested comments, AWS cloud services, and a custom admin portal.</>;

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>PageFlow Library</BoldSpan> is a full-stack platform for uploading, browsing, and managing digital books. Built solo with <BoldSpan>Next.js</BoldSpan>, <BoldSpan>Django</BoldSpan>, and <BoldSpan>AWS</BoldSpan>, it showcases scalable architecture and clean design.
    </p>
    <p>
      Visitors can search and download books, while registered users can upload, favorite, and leave <BoldSpan>nested comments</BoldSpan>.
    </p>
    <p>
      Features include <BoldSpan>Google Sign-In</BoldSpan>, a custom <BoldSpan>Admin Portal</BoldSpan>, <BoldSpan>responsive design</BoldSpan>, <BoldSpan>light/dark mode</BoldSpan>, and cloud storage via <BoldSpan>S3</BoldSpan> and <BoldSpan>PostgreSQL (RDS)</BoldSpan>.
    </p>
  </div>
);



export const library = {
  id: "library",
  name: "PageFlow Library",
  tags: ["Web App", "Next", "Django", "AWS"],
  badge: "Personal Full-Stack Project",
  blurb: short,
  description: long,
  thumbnail:{
    src: "pageflow-0.jpg",
    blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw",
  },
  images: [
    { src: "pageflow-1.jpg", blurhash: "L8Pj4700D$?H004.D%Mx8_~q%MIV" },
    { src: "pageflow-2.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-3.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-4.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-5.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-6.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-7.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-8.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-9.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-10.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-11.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-12.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
    { src: "pageflow-13.jpg", blurhash: "LID9xL$$01OGcbx^s8i^%fsmozbw" },
  ],
  mainStack: [
    IconLibrary.NEXT,
    IconLibrary.DJANGO,
    IconLibrary.AWS,
  ],
  extendedStack: [
    IconLibrary.RDS,
    IconLibrary.S3,
    IconLibrary.POSTGRESQL,
    IconLibrary.FULL_STACK,
    IconLibrary.AUTHENTICATION,
    IconLibrary.TAILWIND,
    IconLibrary.RESPONSIVE_DESIGN,
    IconLibrary.OAUTH,
    IconLibrary.RENDER,
    IconLibrary.VERCEL,
  ],
  externalLinks: [
    { name: "Application", link: "https://library-gold-three.vercel.app/", icon: IconLibrary.WORLD.icon },
    { name: "Code", link: "https://github.com/ChaceN89/library", icon: IconLibrary.GITHUB.icon },
  ],
};
