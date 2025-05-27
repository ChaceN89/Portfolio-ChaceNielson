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
      This project is a Flappy Bird clone built with Unity and C#. Players control a bird, navigating through pipes while avoiding collisions.   
    </p>
  </div>
);

export const flappyBirdClone = {
  id: "flappy-bird-clone",
  name: "Flappy Bird Clone",
  tags: ["Game", "Unity", "C#"],
  blurb: short,
  description: long,
  thumbnail: {
    src: "flappyBird.jpg",
    blurhash: "L2Ps@p00~nS^00OT_2D*008^R;Di",
  },
  images: [
    { src: "flappyBird.jpg", blurhash: "L8CI]Vs~Ros~8[obWHkA.Uk8oYs~" },
  ],
  mainStack: [
    IconLibrary.UNITY,
    IconLibrary.CSHARP,
  ],
  extendedStack: [
    IconLibrary.GAME_DESIGN,
    IconLibrary.UNITY_PHYSICS,
  ],
};
