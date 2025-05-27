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
import { FaSteam } from "react-icons/fa";

// Short description (blurb) to be displayed on the project card
const short = <>A relaxing fish-scaling game from the 2024 GMTK Game Jam, with 200K+ plays, 30K+ wishlists, and an upcoming Steam release.</>;

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>Scale The Depths</BoldSpan> is the award-winning fish-scaling game that took first place in the <BoldSpan>2024 GMTK Game Jam</BoldSpan>. Built around the theme “Built to Scale,” players control a robot chef who scales fish to feed demanding underwater customers. The game was selected as the <BoldSpan>top entry out of 7,000+ submissions</BoldSpan>, praised for its originality, execution, and charm.
    </p>
    <p>
      Since launch, the demo has attracted <BoldSpan>200,000+ plays on Itch.io</BoldSpan> and maintains a <BoldSpan>4.6-star rating</BoldSpan>. Its popularity led to a full version now in active development, with over <BoldSpan>30,000 wishlists</BoldSpan> on <BoldSpan>Steam</BoldSpan>.
    </p>
    <p>
      This project reflects my passion for creative gameplay, Unity-based polish, and collaborative teamwork. I contributed to core gameplay systems, visual polish, and performance optimization throughout the jam and now in the full version's ongoing development.
    </p>
  </div>
);



export const scaleTheDepths = {
  id: "scale-the-depths",
  name: "Scale The Depths",
  tags: ["Game", "Unity"],
  badge: "Game Jam Winning Video Game",
  blurb: short,
  description: long,
  thumbnail:{
    src: "scaleTheDepths1.jpg",
    blurhash: "LaJuWDA0SdTLuPIUwbt8buRPtSoz",
  },
  images: [
    { src: "scaleTheDepths1.jpg", blurhash: "LaJuWDA0SdTLuPIUwbt8buRPtSoz" },
    { src: "scaleTheDepths2.jpg", blurhash: "LoGKwfoexZI@.TjYn$S54;WAM{t7" },
    { src: "scaleTheDepths3.jpg", blurhash: "LC5H+0t,NfOtuPrBxCS%+EtRRkNe" },
    { src: "scaleTheDepths4.jpg", blurhash: "LaNwD:IU?wNGM{RjV@WC.8t7IAWB" },
    { src: "scaleTheDepths5.jpg", blurhash: "LoGKwfoexZI@.TjYn$S54;WAM{t7" },
    { src: "scaleTheDepths6.jpg", blurhash: "LcIaDlIpXA={u6X9IpsSD%kCI;Rk" },
  ],
  mainStack:[
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
  ],
  extendedStack:[
    IconLibrary.PLASTIC_SCM,
    IconLibrary.TEAM_COLLABORATION,
    IconLibrary.SHADER_GRAPH,
    IconLibrary.INSPECTOR_TOOLS,
  ],
  externalLinks: [
    { name: "Play On Itch.io", link: "https://serpexnessie.itch.io/scale-the-depths", icon:IconLibrary.ITCHIO.icon },
    { name: "Steam Page", link: "https://store.steampowered.com/app/3198890/Scale_the_Depths/", icon: FaSteam },
    { name: "Top 20 Results Video", link: "https://youtu.be/gqCAeFjB8Uo?si=Wxp0ATxZGN4vtOGH&t=1133", icon: IconLibrary.YOUTUBE.icon },
  ],
};
