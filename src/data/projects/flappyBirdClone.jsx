/**
 * @file flappyBirdClone.js
 * @module flappyBirdClone
 * @desc Contains data for the Flappy Bird Clone project.
 * 
 * @name Flappy Bird Clone
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";

// Short description (blurb) to be displayed on the project card
const short = "A Flappy Bird clone developed using Unity Game Engine.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project is a Flappy Bird clone developed with Unity and C#. Players control a bird navigating through pipes and avoiding collisions.
    </p>
  </div>
);

export const flappyBirdClone = {
  id: "flappy-bird-clone",
  name: "Flappy Bird Clone",
  tag: "Game",
  blurb: short,
  description: long,
  images: [
    { src: "flappyBird.jpg", blurhash: "L8CI]Vs~Ros~8[obWHkA.Uk8oYs~" },
  ],
  youtubeEmbed: "https://www.youtube.com/watch?v=KOZBFfWv8B8"  ,
  mainStack: [
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
  ],
  extendedStack: [
    IconLibrary.GAME_DEVELOPMENT,
    IconLibrary.UNITY_PHYSICS,
  ],
};
