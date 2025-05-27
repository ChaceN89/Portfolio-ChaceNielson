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
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = <>A homepage built to showcase our studio, games, and creative identity through polished, responsive web design.</>;

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      I designed and developed this homepage for the <BoldSpan>Glass Gecko Games</BoldSpan> team, using <BoldSpan>React</BoldSpan> and <BoldSpan>Tailwind CSS</BoldSpan>. It features <BoldSpan>Framer Motion</BoldSpan> animations and <BoldSpan>blurhash</BoldSpan>-based image loading for a smooth, visually polished experience that highlights both our <BoldSpan>games</BoldSpan> and <BoldSpan>team</BoldSpan>.
    </p>
    <p>
      The project combines clean component architecture with a <BoldSpan>bright, playful design</BoldSpan>, delivering a modern UI that feels both polished and approachable. Built with <BoldSpan>reusable components</BoldSpan> and <BoldSpan>responsive layouts</BoldSpan>, and deployed via <BoldSpan>Netlify</BoldSpan> with <BoldSpan>continuous integration</BoldSpan>, it reflects my focus on user experience, maintainability, and performance—all while capturing the creative spirit of the studio.
    </p>
  </div>
);

export const glassGeckoGames = {
  id: "glass-gecko-games",
  name: "Glass Gecko Games Homepage",
  tags: ["Web App", "React", "Tailwind"],
  badge: "Animated Landing Page",
  blurb: short,
  description: long,
  thumbnail:{
    src: "glassGecko5.jpg",
    blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP",
  },
  images: [
    { src: "glassGecko1.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko2.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko3.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko4.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko5.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
    { src: "glassGecko6.jpg", blurhash: "LBCjFmd7MM9FsK55xH%M4,=zR$RP" },
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
