/**
 * @file CardGenerator.js
 * @module CardGenerator
 * @desc Contains data for the Card Generator project.
 * 
 * @name Card Generator 
 * 
 * @author Chace Nielson
 * @created 2024-08-21
 * @updated 2024-08-21
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "A React Application with State Management.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      Built for the Glass Gecko Games team to test card game mechanics before building a Unity game. The application allows users to generate a random playing card using artwork or their own custom images. It uses state management to keep track of the card data and the user's settings.
    </p>
    <p>
      It features a clean and responsive UI, with a simple design that allows users to easily generate a card and download an image. The application is deployed using Netlify.
    </p>
  </div>
);

export const cardGenerator = {
  starred: true,
  id: "card-generator", 
  name: "Card Generator",
  tag: "UX/UI",
  blurb: short,
  description: long,
  images: [
    { src: "cardGenerator1.jpg", blurhash: "LDPjP,bc~VxC$uW?NPr=DkWs%Ks8" },
    { src: "cardGenerator2.jpg", blurhash: "LLONRkWDkCjJ~Mj[ofayEBj[oJbF" },
    { src: "cardGenerator3.jpg", blurhash: "LCPs*Qo#~oni$vkWNiV@9Hbc%Ji_" },

  ],
  mainStack: [
    IconSkills.REACT,
    IconSkills.TAILWINDCSS,
  ],
  extendedStack: [
    IconSkills.NETLIFY,
    IconSkills.STATEMANAGEMENT,
    IconSkills.RESPONSIVE_DESIGN
  ],
  externalLinks: [
    { name: "Website", link: "https://card-generator-glass-gecko.netlify.app/", icon: IconSkills.WORLD.icon },
    { name: "Code", link: "https://github.com/GlassGeckoGames/monster-mash-card-generator", icon: IconSkills.GITHUB.icon },
  ],
};
