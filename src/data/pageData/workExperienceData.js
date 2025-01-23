/**
 * @file workExperienceData.js
 * @module workExperienceData
 * @desc Contains data for professional experiences, including company names, roles, dates, descriptions, technologies, and achievements.
 * 
 * @exports workExperiencePageData
 * @exports workExperienceList
 * @author Chace Nielson
 * @created July 28, 2024
 * @updated Aug 14, 2024
 */

import { glassGeckoWork } from "../workExperience/glassGeckoWork";
import { albertaTomorrowWork } from "../workExperience/albertaTomorrowWork";
import { geothermalWork } from "../workExperience/geothermalWork";

export const workExperiencePageData = {
  title: 'Work Experience',
  description: 'Technical work.',
};

export const workExperienceList = [
  albertaTomorrowWork,
  glassGeckoWork,
  geothermalWork,
];
