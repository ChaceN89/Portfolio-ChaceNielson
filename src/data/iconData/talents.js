/**
 * @file talents.js
 * @module talents
 * @desc Contains all icons related to personal talents and abilities.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { FaBasketballBall, FaBiking, FaGuitar, FaHiking, FaMusic, FaSnowboarding, FaSwimmer } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";

const talentIcons = {
  MUSIC: { name: "Music", icon: FaMusic, color: "black" },
  SNOWBOARDING: { name: "Snowboarding", icon: FaSnowboarding, color: "black" },
  BASKETBALL: { name: "Basketball", icon: FaBasketballBall, color: "black" },
  GUITAR: { name: "Guitar", icon: FaGuitar, color: "black" },
  HIKING: { name: "Hiking", icon: FaHiking, color: "black" },
  MOUNTAIN_CLIMBING: { name: "Mountain Climbing", icon: GiMountainClimbing, color: "black" },
  BIKING: { name: "Biking", icon: FaBiking, color: "black" },
  SWIMMING: { name: "Swimming", icon: FaSwimmer, color: "black" },
};

export default talentIcons 