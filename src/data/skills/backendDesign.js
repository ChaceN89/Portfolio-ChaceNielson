/**
 * @file backendDesign.js
 * @module backendDesign
 * @desc Contains data for the Backend Design skills section.
 * 
 * @name Backend Design
 * @since 2.1
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

/**
 * Represents the Backend Design skills section.
 * @type {Object}
 * @property {string} id - The unique identifier for the Backend Design section.
 * @property {string} name - The name of the skills section.
 * @property {string} linkName - The text for the link to see more backend tools.
 * @property {React.ReactNode} description - A brief description of the Backend Design skills.
 * @property {Array<React.Component>} topSkills - The list of top skills with their respective icons.
 * @property {Array<React.Component>} minorSkills - The list of minor skills with their respective icons.
 */
export const backendDesign = { 
  id: "backend-design",
  name: "Backend Design", 
  linkName: "See More of My Backend Tools", 
  description: (
    <span>
     I focus on building robust backends with RESTful APIs, databases, and server-side logic for full-stack applications.
    </span>
  ),
  topSkills: [
    IconSkills.PYTHON,
    IconSkills.EXPRESS_JS,
    IconSkills.FASTAPI,
    IconSkills.POSTGRESQL,
  ],
  minorSkills: [
    IconSkills.PLOTLY_DASH,
    IconSkills.DJANGO,
    IconSkills.MONGODB,
    IconSkills.MYSQL,
    IconSkills.SQLITE,
    IconSkills.DOCKER,
    IconSkills.REST_API,
    IconSkills.CI_CD,
    IconSkills.CLOUD_DEPLOYMENT,
    IconSkills.AWS,
    IconSkills.NETLIFY,
    IconSkills.VERCEL,
    IconSkills.RENDER,
  ],
};
