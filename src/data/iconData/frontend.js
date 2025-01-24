/**
 * @file frontend.js
 * @module frontend
 * @desc Contains all icons related to frontend development and tools.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { FaReact } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { MdOutlineBlurOn } from "react-icons/md";

const folder = "frontend";

const frontendIcons = {
  REACT: { name: "React", icon: FaReact, color: "lightblue" },
  VUE: { name: "Vue", svg_path: `${folder}/vue.svg` },
  NEXT: { name: "Next", svg_path: `${folder}/next.svg` },
  VITE: { name: "Vite", svg_path: `${folder}/vite.svg` },

  RESPONSIVE_DESIGN: { name: "Responsive Design", svg_path: `${folder}/responsive-design.svg` },
  WEB_DESIGN: { name: "Web Design", svg_path: `${folder}/web-design.svg` },
  
  HTML: { name: "HTML", svg_path: `${folder}/html-5.svg` },
  CSS: { name: "CSS", svg_path: `${folder}/css-3.svg` },
  TAILWIND: { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF9" },

  REDUX: { name: "Redux", icon: SiRedux, color: '#4A4ABC' },
  STATEMANAGEMENT: { name: "State Management", svg_path: `${folder}/state-management.svg` },

  FRAMER_MOTION: { name: "Framer Motion", icon: TbBrandFramerMotion, color: "black" },
  BLURHASH: { name: "BlurHash", icon: MdOutlineBlurOn, color: "black" },
};

export default frontendIcons;
