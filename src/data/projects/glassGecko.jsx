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
const short = "The website built for the Glass Gecko Games team.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This website was created for the <BoldSpan>Glass Gecko Games</BoldSpan> team. Built using <BoldSpan>React</BoldSpan> and <BoldSpan>Tailwind CSS</BoldSpan>, it features animations and <BoldSpan>blurhashing</BoldSpan> of images and backgrounds for a smooth and seamless experience. 
      The site highlights <BoldSpan>games</BoldSpan> and the <BoldSpan>team</BoldSpan>.
    </p>
    <p>
      The website ensures an engaging user experience through improved <BoldSpan>organization</BoldSpan>, 
      animations using <BoldSpan>Framer Motion</BoldSpan>, and the use of <BoldSpan>reusable components</BoldSpan>. 
      Deployed on <BoldSpan>Netlify</BoldSpan> using <BoldSpan>continuous integration</BoldSpan>, it demonstrates the 
      effective integration of <BoldSpan>modern web technologies</BoldSpan> to create a dynamic and interactive platform for showcasing our team's work.
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
    { src: "glassGecko0.jpg", blurhash: "q5CZOvIAxgbY5lM|00S4^ssp%4ogJBoMMxWB9QX4XLogZ$WAx]Rj[DxvYixaVGNGROMxDlbZo{s;i_WBt7V@uNn~ZORkXObHR-WB" },
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
