/**
 * @file cubeGame.js
 * @module cubeGame
 * @desc Contains data for the Cube Game project.
 * 
 * @name Cube Game
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";

// Short description (blurb) to be displayed on the project card
const short = "A simple endless runner built in Unity, using physics.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      Cube Game is a fast-paced endless runner developed in Unity, where players guide a cube through challenging obstacles in an ever-changing environment. The goal is to survive as long as possible while avoiding traps and barriers.
    </p>
    <p>
      This project showcases the fundamentals of game development, including dynamic physics, responsive controls, and level design. It's a simple yet fun experience that demonstrates the power of Unity for creating interactive games.
    </p>
    <iframe
      className="rounded-xl"
      frameBorder="0"
      src="https://itch.io/embed/2918493?border_width=5&amp;link_color=FFA500"
      width="100%"
      height="165"
    >
      <a href="https://kar2fast.itch.io/cube-game">Cube Game by Kar2fast</a>
    </iframe>
  </div>
);

export const cubeGame = {
  id: "cube-game",
  name: "Cube game",
  rawName: "Unity Game",
  tag: "Game",
  blurb: short,
  description: long,
  images: [
    { src: "cube00.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube0.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube1.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube2.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube3.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
    { src: "cube4.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
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
