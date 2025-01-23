/**
 * @file iconLibrary.js
 * @module iconLibrary
 * @desc Combines and organizes icons from various categories such as frontend, backend, AWS, databases, and more. 
 * All icons are imported from the `iconData` folder and merged into a unified `IconLibrary` object for use across the application.
 * 
 * @author Chace Nielson
 * @created July 28, 2024
 * @updated Jan 22, 2025
 */

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

// Combines all icons into a single library for use across the application
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
