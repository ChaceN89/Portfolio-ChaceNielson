/**
 * @file scaleTheDepths.js
 * @module scaleTheDepths
 * @desc Contains data for the Scale The Depths Game project.
 * 
 * @name scaleTheDepths
 * 
 * @exports scaleTheDepths
 * 
 * @author Chace Nielson
 * @created 2024-08-21
 * @updated 2024-09-05
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Fishing game and winner of the 2024 GMTK Game Jam.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      Scale the Depths was created for the 2024 GMTK Game Jam, where the theme was "Built to Scale." We took a literal approach, putting the player in control of a robot tasked with scaling fish to feed hungry aquatic customers. The game stood out among over 7,000 submissions and was selected as a <strong>Winner of the jam</strong>.
    </p> 
  </div>
);

export const scaleTheDepths = {
  id: "scale-the-depths",
  name: "Scale The Depths",
  tag: "Game",
  blurb: short,
  description: long,
  images: [
    { src: "scaleTheDepths1.jpg", blurhash: "LaJuWDA0SdTLuPIUwbt8buRPtSoz" },
    { src: "scaleTheDepths2.jpg", blurhash: "LoGKwfoexZI@.TjYn$S54;WAM{t7" },
    { src: "scaleTheDepths3.jpg", blurhash: "LC5H+0t,NfOtuPrBxCS%+EtRRkNe" },
    { src: "scaleTheDepths4.jpg", blurhash: "LaNwD:IU?wNGM{RjV@WC.8t7IAWB" },
    { src: "scaleTheDepths5.jpg", blurhash: "LaNwD:IU?wNGM{RjV@WC.8t7IAWB" },
    { src: "scaleTheDepths6.jpg", blurhash: "LcIaDlIpXA={u6X9IpsSD%kCI;Rk" },
  ],
  // youtubeEmbed: "",
  mainStack:[
    IconSkills.UNITY,
    IconSkills.CSHARP,
  ],
  extendedStack:[
    IconSkills.PLASTIC_SCM,
    IconSkills.TEAM_COLLABORATION,
  ],
  externalLinks: [
    { name: "Play the Game", link: "https://serpexnessie.itch.io/scale-the-depths", icon: IconSkills.ITCHIO.icon },
    { name: "GMTK Game Jam 2024", link: "https://itch.io/jam/gmtk-2024", icon: IconSkills.WORLD.icon },
    { name: "Top 20 Results Video", link: "https://youtu.be/gqCAeFjB8Uo?si=Wxp0ATxZGN4vtOGH&t=1133", icon: IconSkills.YOUTUBE.icon },
  ],
};
