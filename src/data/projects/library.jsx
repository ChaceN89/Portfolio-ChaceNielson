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
const short = <>A full-stack library app with Google Sign-In, cloud storage, and a custom admin dashboard for managing digital books.</>


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
    <p>
      Originally deployed using AWS RDS, the project now runs on <BoldSpan>Supabase</BoldSpan> for simpler management and free-tier hosting. The backend is hosted on <BoldSpan>Render</BoldSpan>, which may experience brief delays after periods of inactivity due to cold starts — a tradeoff made to keep the app cost-effective while still fully functional.
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
    blurhash: "LQHLVd%J%2NI4oIVWBxu~qoeayof",
  },
  images: [
    { src: "pageflow-1.jpg", blurhash: "LPO3,[xYtlNf_4M|M_xCDij[jZad" },
    { src: "pageflow-2.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-3.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-4.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-5.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-6.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-7.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-8.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-9.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-10.jpg", blurhash: "LZN^PQ-p_N%h8_-pIAIpIURjayax" },
    { src: "pageflow-11.jpg", blurhash: "L770}TxtMwICo%flW8nh|}WCj:s," },
    { src: "pageflow-12.jpg", blurhash: "L770}TxtMwICo%flW8nh|}WCj:s," },
    { src: "pageflow-13.jpg", blurhash: "L770}TxtMwICo%flW8nh|}WCj:s," },
  ],
  mainStack: [
    IconLibrary.NEXT,
    IconLibrary.DJANGO,
    IconLibrary.AWS,
  ],
  extendedStack: [
    IconLibrary.SUPABASE,
    IconLibrary.S3,
    IconLibrary.POSTGRESQL,
    IconLibrary.RDS,
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
