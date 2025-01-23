/**
 * @file gameDesign.js
 * @module gameDesign
 * @desc Contains all icons related to game design and development.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { FaUnity } from "react-icons/fa";
import { MdOutlineAnimation } from "react-icons/md";

const folder = "gameDesign";

const gameDesignIcons = {
  UNITY: { name: "Unity", icon: FaUnity, color: "white" },
  ANIMATION: { name: "Animation", icon: MdOutlineAnimation, color: "white" },
  GAME_DEVELOPMENT: { name: "Game Development", svg_path: `${folder}/game-controller.svg` },
  UNITY_PHYSICS: { name: "Unity Physics System", svg_path: `${folder}/physics.svg` },
  PLASTIC_SCM: { name: "Plastic SCM", svg_path: `${folder}/plastic-scm.svg` },
  OPEN_HAPTICS: { name: "Open Haptics", svg_path: `${folder}/haptics.svg` },
  HAPTIC_STYLUS: { name: "Haptic Stylus", svg_path: `${folder}/stylus.svg` },
};

export default gameDesignIcons;
