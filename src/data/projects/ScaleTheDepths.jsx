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
const short = <>A relaxing fishing game from the 2024 GMTK Game Jam — now with a playable Steam demo, 200K+ plays, and 35K+ wishlists.</>;

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <BoldSpan>Scale The Depths</BoldSpan> is a relaxing, award-winning fish-scaling game that began as a <BoldSpan>2024 GMTK Game Jam</BoldSpan> entry. Built around the theme “Built to Scale,” you play as a robot chef scaling fish to feed hungry underwater customers. The game took <BoldSpan>1st place out of 7,000+ submissions</BoldSpan> and was praised for its originality, charm, and polish.
    </p>
    <p>
      The original version reached <BoldSpan>200,000+ plays on Itch.io</BoldSpan> and holds a <BoldSpan>4.6-star rating</BoldSpan>. Thanks to overwhelming support, we’ve expanded it into a full game — now in development with a demo available on <BoldSpan>Steam</BoldSpan>. Over <BoldSpan>35,000 players</BoldSpan> have wishlisted the game ahead of its planned 2026 release.
    </p>
    <p>
      As one of the developers, I contributed to the core gameplay systems, visual polish using shader graphs, and performance optimization for loading and other systems. I’ve continued working on the full version’s expanded content, shader effects, and UX enhancements as part of our ongoing development.
    </p>
  </div>
);


export const scaleTheDepths = {
  id: "scale-the-depths",
  name: "Scale The Depths",
  tags: ["Game", "Unity", "C#"],
  badge: "Game Jam Winning Video Game",
  blurb: short,
  description: long,
  thumbnail:{
    src: "scaleTheDepths-0.jpg",
    blurhash: "LfHz9MVaShM{_4RkbIazRQWCoJtR",
  },
  images: [
    { src: "scaleTheDepths-1.jpg", blurhash: "LaFt1Uo#M{t5~qWFM|ocnSM|aLoI" },
    { src: "scaleTheDepths-2.jpg", blurhash: "LFG]Bmt800ad9IWX_1oe00Rj~ooe" },
    { src: "scaleTheDepths-3.jpg", blurhash: "LH8i*4*JVso#%#%~QnM0nOa0VYnj" },
    { src: "scaleTheDepths-4.jpg", blurhash: "LaFs_Fo#M|t3~qWYM|obnTRQV@oI" },
    { src: "scaleTheDepths-5.jpg", blurhash: "LaF%h{o#M{t3~qWEM|ocnSRQaLoI" },
    { src: "scaleTheDepths-6.jpg", blurhash: "LaFs}Nt8M|t3~qWFM|obnTM|aKsm" },
    { src: "scaleTheDepths-7.jpg", blurhash: "LRJ[0CRj_NV@Mxsm%0t5%gaKIAWB" },
    { src: "scaleTheDepths-8.jpg", blurhash: "L35~F5m.D6_M.mx^%MM#mn%gpJn5" },
  ],
  youtubeID: "OOywPGm2zCw",

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
    { name: "Steam Page and Demo", link: "https://store.steampowered.com/app/3198890/Scale_the_Depths/", icon: FaSteam },
    { name: "Itch.io Game Jam Version", link: "https://serpexnessie.itch.io/scale-the-depths", icon:IconLibrary.ITCHIO.icon },
    { name: "Top 20 Results Video", link: "https://youtu.be/gqCAeFjB8Uo?si=Wxp0ATxZGN4vtOGH&t=1133", icon: IconLibrary.YOUTUBE.icon },
  ],
};
