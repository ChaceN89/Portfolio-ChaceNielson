/**
 * @file glassGeckoGames.js
 * @module glassGeckoGames
 * @desc Contains data for the Glass Gecko Games website project.
 * 
 * @name Glass Gecko Games
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-14
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";

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

const features = [
  "Modern and engaging design",
  "Animations and blurhashing for smooth transitions",
  "Responsive and mobile-friendly",
  "SEO optimization",
  "PWA functionality",
  "EmailJS integration for contact form",
];


export const glassGeckoGames = {
  starred: true,
  id: "glass-gecko-games",
  name: "Glass Gecko Games",
  tag: "UX/UI",
  blurb: short,
  description: long,
  features: features,
  images: [
    { src: "glassgecko_highlight.png", blurhash: "q5CZOvIAxgbY5lM|00S4^ssp%4ogJBoMMxWB9QX4XLogZ$WAx]Rj[DxvYixaVGNGROMxDlbZo{s;i_WBt7V@uNn~ZORkXObHR-WB" },
    { src: "glassGecko.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko2.png", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko3.png", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko4.png", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko5.png", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko6.png", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
  ],
  mainStack: [
    IconLibrary.REACT,
    IconLibrary.TAILWIND,
  ],
  extendedStack: [
    IconLibrary.FRAMER_MOTION,
    IconLibrary.BLURHASH,
    IconLibrary.NETLIFY,
    IconLibrary.CI_CD,
    IconLibrary.TEAM_COLLABORATION,
    IconLibrary.RESPONSIVE_DESIGN,
    IconLibrary.SEO,
    IconLibrary.PWA,
    IconLibrary.EMAIL_JS
  ],
  externalLinks: [
    { name: "Visit Site", link: "https://glassgeckogames.com", icon: IconLibrary.WORLD.icon },
    { name: "Code", link: "https://github.com/GlassGeckoGames/company-website", icon: IconLibrary.GITHUB.icon },
  ],
};
