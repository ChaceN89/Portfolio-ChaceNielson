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

// Short description (blurb) to be displayed on the project card
const short = "Showcasing my skills and projects with a modern, streamlined portfolio.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <span className="font-bold">My Portfolio</span> is a personal website designed to showcase my technical skills, projects, and contact information. Built with <span className="font-bold">React</span>, <span className="font-bold">Tailwind CSS</span> and <span className="font-bold">Vite</span>, the portfolio features a clean, modern design that highlights my work.
    </p>
    <p>
      <span className="font-bold">Version 1</span> of my portfolio served as my first personal branding website, but it included too much extra information and lacked organization in showcasing projects. While it effectively demonstrated the basics of web development, it left room for improvement in terms of design and usability.
    </p>
    <p>
      <span className="font-bold">Version 2</span> addresses these shortcomings with several enhancements:
      <ul className="list-disc list-inside pl-5">
        <li>Implemented <span className="font-bold">blurhashing</span> to blur images during loading, improving performance and aesthetics.</li>
        <li>Integrated <span className="font-bold">Framer Motion</span> for animations, adding dynamic interactions to create a polished experience.</li>
        <li>Streamlined the layout and navigation to better organize projects and skills.</li>
        <li><span className="font-bold">Modal routing</span> is used to display skills and projects over the main page.</li>
        <li>Enhanced responsiveness and accessibility for a consistent experience across devices.</li>
      </ul>
    </p>
    <p>
      Deployed on <span className="font-bold">Vercel</span>, the portfolio demonstrates modern web development practices, with features like responsive design, SEO optimization, and progressive web app (PWA) functionality.
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
    { src: "portfolio0.jpg", blurhash: "C78g,54m9F_4X9V?aexv" },
    { src: "portfolio1.jpg", blurhash: "C78g,54m9F_4X9V?aexv" },
    { src: "portfolio2.jpg", blurhash: "L78g,54m9F_4X9V?aexv9Ft7s;I." },
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
    { name: "Version 1", link: "https://portfolio-chace-nielson.vercel.app/", icon: IconLibrary.WORLD.icon },
    { name: "Version 1 Code", link: "https://github.com/ChaceN89/Portfolio-ChaceNielson", icon: IconLibrary.GITHUB.icon },
    { name: "Version 2 Code",  link: "https://github.com/ChaceN89/Portfolio-ChaceNielson-V2", icon: IconLibrary.GITHUB.icon },
  ]
};
