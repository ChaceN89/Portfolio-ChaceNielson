/**
 * @file devOps.js
 * @desc Contains data for the DevOps skills section.
 * 
 * @author Chace Nielson
 * @created Jan 23, 2025
 * @updated Jan 23, 2025
 */

import IconSkills from "../iconLibrary";

export const devOps = {
  id: "devops",
  name: "DevOps",
  linkName: "Explore My DevOps Toolkit",
  description: (
    <span>
      I specialize in streamlining development and deployment processes through automation, efficient workflows, and modern tech solutions.
    </span>
  ),
  topSkills: [
    IconSkills.DOCKER,
    IconSkills.CI_CD,
    IconSkills.CLOUD_DEPLOYMENT,
    IconSkills.AWS,
  ],
  minorSkills: [
    // Deployment & Hosting Platforms
    IconSkills.NETLIFY,
    IconSkills.VERCEL,
    IconSkills.RENDER,
    IconSkills.RAILWAY,

    // Infrastructure Management
    IconSkills.AMPLIFY,
    IconSkills.RDS,
    IconSkills.S3,
    IconSkills.TERRAFORM,

    // Automation & Collaboration Tools
    IconSkills.AUTOMATION,
    IconSkills.CODE_REVIEWS,

    // Version Control
    IconSkills.GITHUB,
    IconSkills.GIT,
    IconSkills.AGILE_TOOLS,
  ],
};
