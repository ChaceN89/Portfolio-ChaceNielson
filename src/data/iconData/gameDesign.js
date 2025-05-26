/**
 * @file gameDesign.js
 * @module gameDesign
 * @desc Contains all icons related to game design and development.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { FaUnity, FaEye } from "react-icons/fa";
import { MdOutlineAnimation } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { FiFeather } from "react-icons/fi";
import { GiMaze } from "react-icons/gi";
import { SiFmod } from "react-icons/si";


const folder = "gameDesign";

const gameDesignIcons = {
  UNITY: { name: "Unity", icon: FaUnity, color: "white" },
  GIMP: { name: "GIMP", svg_path: `${folder}/gimp.svg` },
  FMOD: { name: "FMOD", icon: SiFmod, color: "white" },
  SHADER_GRAPH: { name: "Shader Graph", svg_path: `${folder}/shader-graph.svg` },
  INSPECTOR_TOOLS: { name: "Odin Inspector Tools", svg_path: `${folder}/odin-inspector.svg` },
  
  FACTORY_PATTERN: { name: "Factory Pattern", icon: FaGear, color: "white" },
  OBSERVER_PATTERN: { name: "Observer Pattern", icon: FaEye, color: "white" },
  FLYWEIGHT_PATTERN: { name: "Flyweight Pattern", icon: FiFeather, color: "white" },
  PATHFINDING: { name: "Pathfinding", icon: GiMaze, color: "white" },

  ANIMATION: { name: "Animation", icon: MdOutlineAnimation, color: "white" },
  GAME_DESIGN: { name: "Game Design", icon: IoGameController, color: "black" },
  UNITY_PHYSICS: { name: "Unity Physics System", svg_path: `${folder}/physics.svg` },
  PLASTIC_SCM: { name: "Plastic SCM", svg_path: `${folder}/plastic-scm.svg` },
  
  OPEN_HAPTICS: { name: "Open Haptics", svg_path: `${folder}/haptics.svg` },
  HAPTIC_STYLUS: { name: "Haptic Stylus", svg_path: `${folder}/stylus.svg` },
};

export default gameDesignIcons;
