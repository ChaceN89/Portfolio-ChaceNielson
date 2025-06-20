/**
 * @file portfolio.js
 * @module portfolio
 * @desc Contains data for the Portfolio project.
 * 
 * @name My Portfolio V1
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-14 
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "Showcasing my skills and projects with a modern, streamlined portfolio.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>My Portfolio</BoldSpan> has evolved through multiple versions, each reflecting my growth as a developer and designer. Built with <BoldSpan>React</BoldSpan>, <BoldSpan>Tailwind CSS</BoldSpan>, <BoldSpan>Vite</BoldSpan> and other libraries, it showcases my skills, projects, and ongoing learning process.
    </p>
    <p>
      <BoldSpan>Version 1</BoldSpan> was my first personal branding site. It was simple, but lacked a clear structure and user-friendly navigation. It taught me the basics of React, but the user experience was far from ideal.
    </p>
    <div>
      <BoldSpan>Version 2</BoldSpan> improved upon this by adding animations, better design, and user-friendly features, but I overcomplicated it with too much personal content and images. The best take away from this one was that simplicity is best.

    </div>
    <p>
      <BoldSpan>Version 3</BoldSpan>, is more streamlined, with a focus on my freelancing and full-stack design skills. New projects are easier to add, and the portfolio is more aligned with my professional goals.
    </p>
    <p>
      I plan to continue iterating as I learn new techniques and refine my design and development skills, ensuring my portfolio grows along with my career.
    </p>
  </div>
);


export const portfolio = {
  id: "portfolio",
  name: "My Portfolio",
  tags: ["Web App", "React", "CSS", "Tailwind", "JavaScript"],
  blurb: short,
  description: long,
  thumbnail: {
    src: "portfolio-v3.jpg",
    blurhash: "C78g,54m9F_4X9V?aexv",
  },
  images: [
    { src: "portfolio-v3.jpg", blurhash: "L19a8J-=8_Dh_3tRMxIA00RP.8x]" },
    { src: "portfolio-v2.jpg", blurhash: "LICj3500xu?c00?wRjRNM{a{WBWY" },
    { src: "portfolio-v2-2.jpg", blurhash: "LLJ*r1Rj00t7~qof9Fj[00ae_3oe" },
    { src: "portfolio-v1.jpg", blurhash: "L78g,54m9F_4X9V?aexv9Ft7s;I." },
  ],
  mainStack: [
    IconLibrary.REACT,
    IconLibrary.TAILWIND,
    IconLibrary.VITE
  ],
  extendedStack: [
    IconLibrary.FRAMER_MOTION,
    IconLibrary.VERCEL,
    IconLibrary.RESPONSIVE_DESIGN,
    IconLibrary.SEO,
    IconLibrary.PWA,
    IconLibrary.EMAIL_JS,
    IconLibrary.GOOGLE_ANALYTICS,
    IconLibrary.BLURHASH,
  ],
  externalLinks: [
    { name: "V3 Code",  link: "https://github.com/ChaceN89/Portfolio-ChaceNielson", icon: IconLibrary.GITHUB.icon },
    { name: "V2 Link", link: "https://portfolio-chace-nielson-delta.vercel.app/", icon: IconLibrary.WORLD.icon },
    { name: "V2 Code",  link: "https://github.com/ChaceN89/Portfolio-ChaceNielson/tree/Version-2-Code", icon: IconLibrary.GITHUB.icon },
    { name: "V1 Link", link: "https://portfolio-chace-nielson.vercel.app/", icon: IconLibrary.WORLD.icon },
    { name: "V1 Code", link: "https://github.com/ChaceN89/Portfolio-ChaceNielson/tree/Version-1-Code", icon: IconLibrary.GITHUB.icon },
  ]
};
