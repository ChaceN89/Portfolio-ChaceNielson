/**
 * @file glassGeckoGames.js
 * @module glassGeckoGames
 * @desc Contains data for the Glass Gecko Games website project.
 * 
 * @name Glass Gecko Games
 * 
 * @example
 * // Example usage of glassGeckoGames data in a component
 * import { glassGeckoGames } from './glassGeckoGames';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{glassGeckoGames.name}</h2>
 *       <div>{glassGeckoGames.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports glassGeckoGames
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-14
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "The website built for the Glass Gecko Games team.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This website was created for the Glass Gecko Games team, of which I am a part. Built using React and Tailwind CSS, it features animations and blurhashing of images and backgrounds for a smooth and seamless experience. The site highlights games and the team.
    </p>
    <p>
      The website ensures an engaging user experience through improved organization, animations using Framer Motion, and the use of reusable components. Deployed on Netlify using continual integration, it demonstrates the effective integration of modern web technologies to create a dynamic and interactive platform for showcasing our team's work.
    </p>
  </div>
);

export const glassGeckoGames = {
  starred: true,
  id: "glass-gecko-games",
  name: "Glass Gecko Games",
  tag: "UX/UI",
  blurb: short,
  description: long,
  images: [
    { src: "glassGecko.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
  ],
  mainStack: [
    IconSkills.REACT,
    IconSkills.TAILWINDCSS,
  ],
  extendedStack: [
    IconSkills.FRAMER_MOTION,
    IconSkills.BLURHASH,
    IconSkills.NETLIFY,
    IconSkills.CI_CD,
    IconSkills.TEAM_COLLABORATION,
    IconSkills.RESPONSIVE_DESIGN,
    IconSkills.SEO,
    IconSkills.PWA,
    IconSkills.EMAILJS
  ],
  externalLinks: [
    { name: "Visit Site", link: "https://glassgeckogames.com", icon: IconSkills.WORLD.icon },
    { name: "Code", link: "https://github.com/GlassGeckoGames/company-website", icon: IconSkills.GITHUB.icon },
  ],
};
