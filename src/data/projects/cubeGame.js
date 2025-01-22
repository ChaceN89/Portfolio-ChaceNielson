/**
 * @file cubeGame.js
 * @module cubeGame
 * @desc Contains data for the Cube Game project.
 * 
 * @name Cube Game
 * 
 * @example
 * // Example usage of cubeGame data in a component
 * import { cubeGame } from './cubeGame';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{cubeGame.name}</h2>
 *       <div>{cubeGame.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports cubeGame
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "An endless runner game developed using Unity Game Engine.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project is an endless runner game created using Unity and C#. Players control a cube, navigating it through a series of challenging levels and obstacles.
    </p>
    <p>
      The game demonstrates essential game mechanics and physics, highlighting the capabilities of Unity for developing engaging and interactive experiences.
    </p>
  </div>
);

export const cubeGame = {
  id: "cube-game",
  name: "Endless Runner Game",
  tag: "Game",
  blurb: short,
  description: long,
  images: [
    { src: "cubegame.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube1.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube2.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube3.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube4.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
  ],
  mainStack: [
    IconSkills.UNITY,
    IconSkills.CSHARP,
  ],
  extendedStack: [
    IconSkills.GAME_DEVELOPMENT,
    IconSkills.UNITY_PHYSICS,
  ],
  externalLinks: [
    { name: "Play Game", link: "https://kar2fast.itch.io/cube-game", icon: IconSkills.ITCHIO.icon },
  ],
};
