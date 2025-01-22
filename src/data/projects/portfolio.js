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

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "My original portfolio.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      My portfolio highlight my tachnical skills and projects. It is built using React and Tailwind CSS. The portfolio features a clean and modern design, providing an overview of my work and contact information. 
    </p>
    <p>
      The project is deployed using Vercel, demonstrating the use of modern web technologies to create an effective personal branding website. Currently I am on the second version of my portfolio. 
    </p>
    <p>
      My orginal portfolio had too much extra information and lacked some features. The new version uses blurhashing to blur images on load and Framer Motion to create animations. It is more organized and has a more streamlined user experience to better showcase my work.
    </p>
  </div>
);

export const portfolio = {
  starred: true,
  id: "portfolio",
  name: "My Portfolio",
  tag: "UX/UI",
  blurb: short,
  description: long,
  images: [
    { src: "portfolio.jpg", blurhash: "C78g,54m9F_4X9V?aexv" },
    { src: "portfolio2.jpg", blurhash: "L78g,54m9F_4X9V?aexv9Ft7s;I." },
  ],
  mainStack: [
    IconSkills.REACT,
    IconSkills.TAILWINDCSS,
  ],
  extendedStack: [
    IconSkills.FRAMER_MOTION,
    IconSkills.BLURHASH,
    IconSkills.VERCEL,
    IconSkills.RESPONSIVE_DESIGN,
    IconSkills.SEO,
    IconSkills.PWA,
    IconSkills.EMAILJS
  ],
  externalLinks: [
    { name: "Version 1", link: "https://portfolio-chace-nielson.vercel.app/", icon: IconSkills.WORLD.icon },
    { name: "Version 1 Code", link: "https://github.com/ChaceN89/Portfolio-ChaceNielson", icon: IconSkills.GITHUB.icon },
    { name: "Version 2 Code",  link: "https://github.com/ChaceN89/Portfolio-ChaceNielson-V2", icon: IconSkills.GITHUB.icon },
  ]
};
