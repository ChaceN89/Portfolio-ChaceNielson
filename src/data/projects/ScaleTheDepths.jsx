/**
 * @file scaleTheDepths.js
 * @module scaleTheDepths
 * @desc Contains data for the Scale The Depths Game project.
 * 
 * @name scaleTheDepths
 * 
 * @author Chace Nielson
 * @created 2024-08-21
 * @updated 2024-09-05
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "Fishing game and winner of the 2024 GMTK Game Jam.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>Scale The Depths</BoldSpan> was created for the <BoldSpan>2024 GMTK Game Jam</BoldSpan>, where the theme was "Built to Scale." Players control a robot tasked with scaling fish to feed hungry aquatic customers in a creative and literal interpretation of the theme. The game stood out among over 7,000 submissions, earning the title of <BoldSpan>Game Jam Winners</BoldSpan>.
    </p>
    <p>
      Since its release, the game has gained significant traction on <BoldSpan>Itch.io</BoldSpan>, receiving over <BoldSpan>50K views</BoldSpan> and maintaining a <BoldSpan>4.6-star rating</BoldSpan>. Its success has also sparked interest in a full version, resulting in over <BoldSpan>12K wishlists</BoldSpan> on <BoldSpan>Steam</BoldSpan>.
    </p>

    <iframe
      className="rounded-xl"
      frameBorder="0"
      src="https://itch.io/embed/2912112?border_width=5&amp;link_color=FFA500"
      width="100%"
      height="165"
    >
      <a href="https://serpexnessie.itch.io/scale-the-depths">
        Scale the Depths by Serpexnessie, Mancavea, Glass Gecko Games, Kar2fast, 4n6u, E-man248, Pepocandii
      </a>
    </iframe>
    <p>
      This project highlights creative gameplay design, polished visuals, and seamless collaboration with a diverse team of developers, resulting in a highly engaging and award-winning experience.
    </p>
  </div>
);

const proj_id = "scale-the-depths";

export const scaleTheDepths = {
  id: proj_id,
  name: "Scale The Depths",
  tags: ["Game", "Unity", "Jam"],
  blurb: short,
  description: long,
  thumbnail:{
    src: "/projects/" + proj_id + "/scaleTheDepths1.jpg",
    blurhash: "LaJuWDA0SdTLuPIUwbt8buRPtSoz",
  },
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
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
  ],
  extendedStack:[
    IconLibrary.PLASTIC_SCM,
    IconLibrary.TEAM_COLLABORATION,
  ],
  externalLinks: [
    { name: "GMTK Game Jam 2024", link: "https://itch.io/jam/gmtk-2024", icon: IconLibrary.WORLD.icon },
    { name: "Top 20 Results Video", link: "https://youtu.be/gqCAeFjB8Uo?si=Wxp0ATxZGN4vtOGH&t=1133", icon: IconLibrary.YOUTUBE.icon },
  ],
};
