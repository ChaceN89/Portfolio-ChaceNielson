/**
 * @file spaceSurvive.js
 * @module spaceSurvive
 * @desc Contains data for the Space Survive project.
 * 
 * @name Top Down Space Shooter
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";

// Short description (blurb) to be displayed on the project card
const short = "A 2D space adventure game developed using Unity Game Engine.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      <span className="font-bold">Space Survive</span> is an exciting 2D survival game set in the vastness of space, developed with <span className="font-bold">Unity</span> and <span className="font-bold">C#</span>. Players control a spaceship, navigating through waves of obstacles and enemies, with the ultimate goal of surviving as long as possible.
    </p>
    <p>
      The game features multiple modes, a scoring system, save points, and a variety of enemy types, including a challenging final boss. Players can unlock achievements and collect power-ups to enhance their abilities, adding depth and replayability to the experience.
    </p>
  </div>
);

export const spaceSurvive = {
  id: "space-survive",
  name: "Space Survive",
  tag: "Game",
  blurb: short,
  description: long,
  hidePhotos: true,
  images: [
    { src: "spaceSurvive.jpg", blurhash: "L26@E32tL#5kq?Io%%%hyEofR3j?" },
  ],
  youtubeEmbed:"https://www.youtube.com/watch?v=pwIbyhqWbsM",
  mainStack: [
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
  ],
  extendedStack: [
    IconLibrary.GAME_DESIGN,
  ],
};
