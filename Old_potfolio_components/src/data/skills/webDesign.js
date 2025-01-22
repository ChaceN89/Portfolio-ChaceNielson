/**
 * @file webDesign.js
 * @module webDesign
 * @desc Contains data for the Web Design skills section.
 * 
 * @name Web Design
 * @since 2.1
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-14
 */

import IconSkills from "../iconSkills";

/**
 * Represents the Web Design skills section.
 * @type {Object}
 * @property {string} id - The unique identifier for the Web Design section.
 * @property {string} name - The name of the skills section.
 * @property {string} linkName - The text for the link to see more about the web design toolkit.
 * @property {React.ReactNode} description - A brief description of the Web Design skills.
 * @property {Array<React.Component>} topSkills - The list of top skills with their respective icons.
 * @property {Array<React.Component>} minorSkills - The list of minor skills with their respective icons.
 */
export const webDesign = { 
  id: "web-design",
  name: "Web Design",
  linkName: "See My Web Design Toolkit", 
  description: (
    <span>
      With 3 years of experience, I specialize in creating interactive and responsive web designs for application development. 
    </span>
  ),
  topSkills: [
    IconSkills.REACT,
    IconSkills.JAVASCRIPT,
    IconSkills.TAILWINDCSS,
    IconSkills.NODE_JS,
  ],
  minorSkills: [
    IconSkills.VUE,
    IconSkills.NETLIFY,
    IconSkills.VERCEL,
    IconSkills.AWS,
    IconSkills.TYPESCRIPT,
    IconSkills.CHART_JS,
    IconSkills.REDUX,
    IconSkills.HTML,
    IconSkills.CSS,
    IconSkills.FRAMER_MOTION,
    IconSkills.BLURHASH,
    IconSkills.RESPONSIVE_DESIGN,
    IconSkills.STREAMLIT,
    IconSkills.MAPBOX_GL,
    IconSkills.SEO,
    IconSkills.PWA,
    IconSkills.EMAILJS,
  ],
};
