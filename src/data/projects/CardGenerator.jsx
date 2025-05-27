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

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "A random playing card generator.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      Built for the Glass Gecko Games team to test card game mechanics before building a Unity game. The application allows users to generate a random playing card using pre-existing artwork or their own custom images. It uses <BoldSpan>state management</BoldSpan> to keep track of the card data and the user's settings.
    </p>
    <p>
      It features a clean and <BoldSpan>responsive UI</BoldSpan>, with a simple design that allows users to easily generate a card and download an image. The application is deployed using Netlify.
    </p>
  </div>
);

export const cardGenerator = {
  id: "card-generator",
  name: "Card Generator",
  tags: ["Web App", "Game", "React", "Tailwind", "JavaScript"],
  blurb: short,
  description: long,
  thumbnail:{
    src: "cardGenerator1.jpg",
    blurhash: "LDPjP,bc~VxC$uW?NPr=DkWs%Ks8",
  },
  images: [
    { src: "cardGenerator1.jpg", blurhash: "LDPjP,bc~VxC$uW?NPr=DkWs%Ks8" },
    { src: "cardGenerator2.jpg", blurhash: "LLONRkWDkCjJ~Mj[ofayEBj[oJbF" },
    { src: "cardGenerator3.jpg", blurhash: "LCPs*Qo#~oni$vkWNiV@9Hbc%Ji_" },
    { src: "cardGenerator4.jpg", blurhash: "LCPs*Qo#~oni$vkWNiV@9Hbc%Ji_" },
    { src: "cardGenerator5.jpg", blurhash: "LCPs*Qo#~oni$vkWNiV@9Hbc%Ji_" },
  ],
  mainStack: [
    IconLibrary.REACT,
    IconLibrary.TAILWIND,
  ],
  extendedStack: [
    IconLibrary.NETLIFY,
    IconLibrary.STATEMANAGEMENT,
    IconLibrary.RESPONSIVE_DESIGN
  ],
  externalLinks: [
    { name: "Website", link: "https://card-generator-glass-gecko.netlify.app/", icon: IconLibrary.WORLD.icon },
    { name: "Code", link: "https://github.com/GlassGeckoGames/monster-mash-card-generator", icon: IconLibrary.GITHUB.icon },
  ],
};
