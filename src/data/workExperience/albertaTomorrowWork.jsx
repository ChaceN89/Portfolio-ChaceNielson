/**
 * @file albertaTomorrowWork.js
 * @module albertaTomorrowWork
 * @desc Contains data for the Alberta Tomorrow work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, and soft skills.
 * 
 * @example
 * import { albertaTomorrowWork } from '../workExperience/albertaTomorrowWork';
 * 
 * @exports albertaTomorrowWork
 * 
 * @author Chace Nielson
 * @version 2.2
 * @created Jul 29, 2024
 * @updated Jan 29, 2025
 */

import IconLibrary from "../iconLibrary";
import React from "react";
import { BoldSpan, BoldLink } from "../../components/uiElements/InLineText";

export const albertaTomorrowWork = {
  name: 'Alberta Tomorrow',
  role: 'Software Developer',
  img: '/png-icons/alberta-tomorrow.jpg',
  dates: ['Jan 2024', 'Current'],
  link: 'https://www.albertatomorrow.ca',
  
  description: (
    <>
      <BoldSpan>Alberta Tomorrow</BoldSpan> is a non-profit organization that develops <BoldSpan>educational tools</BoldSpan> for sustainable land use and <BoldSpan>energy consumption</BoldSpan>. Its interactive web applications help students across <BoldSpan>Alberta</BoldSpan> and <BoldSpan>British Columbia</BoldSpan> understand the impact of development on the environment through simulations, mapping, and data visualization.
    </>
  ),
  achievements: [
    <>
      Improved a <BoldSpan>simulation tool</BoldSpan> that visualizes and analyzes <BoldSpan>sustainable land use scenarios</BoldSpan>, 
      enhancing its accuracy and usability.
    </>,
    <>
      Integrated features with <BoldSpan>Mapbox API</BoldSpan>, improving the application's <BoldSpan>interactive mapping</BoldSpan> 
      capabilities.
    </>,
    <>
      Designed and developed a prototype for <BoldLink to={"?project=energy-tomorrow"}>Energy Tomorrow</BoldLink> using <BoldSpan>Unity</BoldSpan> and <BoldSpan>game design principles</BoldSpan> to create an interactive educational experience.
    </>,
  ],
  responsibilities: [
    <>
      Collaborated with a <BoldSpan>multidisciplinary team</BoldSpan> to design and implement key features for the web application.
    </>,
    <>
      Worked closely with <BoldSpan>stakeholders</BoldSpan> to ensure project goals aligned with educational objectives.
    </>,
    <>
      Assisted in managing <BoldSpan>project resources</BoldSpan> to meet deadlines and budget constraints.
    </>,
  ],
  softSkills: [
    IconLibrary.CRITICAL_THINKING,
    IconLibrary.ADAPTABILITY,
    IconLibrary.TIME_MANAGEMENT,
    IconLibrary.SELF_MOTIVATION,
  ],
  skills: [
    IconLibrary.AWS,
    IconLibrary.S3,
    IconLibrary.VUE,
    IconLibrary.CSS,
    IconLibrary.MAPBOX_GL,
    IconLibrary.UNITY,
    IconLibrary.BLENDER,
  ],
};
