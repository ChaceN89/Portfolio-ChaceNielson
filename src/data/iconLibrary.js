/**
 * @file iconSkills.js
 * @module iconSkills
 * @desc Contains enumeration for technical skills and their corresponding icons.
 * Enumeration of technical skills with corresponding icons and svg paths or react-icons and react-icon color.
 * 
 * @example - FOR TESTING PURPOSES - VIEW ALL SKILLS/ICONS
 * import IconSkills from '../data/iconSkills';
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-08-21
 */

import { FaReact, FaNodeJs, FaUnity, FaNode, FaDocker, FaMusic, FaSnowboarding, FaBasketballBall, FaGuitar, FaHiking, FaBiking, FaSwimmer, FaItchIo } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { ImGit } from "react-icons/im";
import { SiFastapi, SiTailwindcss, SiMongodb, SiApachespark, SiJupyter, SiTypescript, SiRender, SiVercel, SiRailway, SiStreamlit, SiDjango, SiChartdotjs, SiRedux, SiMapbox } from "react-icons/si";
import { MdOutlineAnimation, MdOutlineBlurOn } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsFileEarmarkPdf } from "react-icons/bs";
import { GiMountainClimbing } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { GoCodeReview } from "react-icons/go";


import utilityIcons from "./iconData/utilityIcons";
import socialIcons from "./iconData/social";
import softSkillIcons from "./iconData/softSkills";
import talentIcons from "./iconData/talents";
import devToolIcons from "./iconData/devTools";
import awsIcons from "./iconData/aws";
import frontendIcons from "./iconData/frontend";
import programmingLanguageIcons from "./iconData/programmingLanguages";
import backendIcons from "./iconData/backend";
import databaseIcons from "./iconData/database";
import designToolIcons from "./iconData/designTools";
import gameDesignIcons from "./iconData/gameDesign";
import engineeringIcons from "./iconData/engineering";
import generalTechIcons from "./iconData/generalTech";
import dataProcessingIcons from "./iconData/dataProcessing";

// Enumeration of technical skills with corresponding icons and svg paths or react-icons and react-icon color
const IconLibrary = {

  


  






  


  ...awsIcons,
  ...backendIcons,
  ...databaseIcons,
  ...dataProcessingIcons,
  ...designToolIcons,
  ...devToolIcons,
  ...engineeringIcons,
  ...frontendIcons,
  ...gameDesignIcons,
  ...generalTechIcons,
  ...programmingLanguageIcons,
  ...socialIcons,
  ...softSkillIcons,
  ...talentIcons,
  ...utilityIcons,

};

export default IconLibrary;
