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
    IconSkills.AWS,
    IconSkills.DOCKER,
    IconSkills.CI_CD,
    IconSkills.GIT,
  ],
  minorSkills: [
    // Version Control
    IconSkills.GITHUB,
    IconSkills.AGILE_TOOLS,

    // Infrastructure Management
    IconSkills.AMPLIFY,
    IconSkills.RDS,
    IconSkills.S3,
    IconSkills.TERRAFORM,

    // Deployment & Hosting Platforms
    IconSkills.NETLIFY,
    IconSkills.VERCEL,
    IconSkills.RENDER,
    IconSkills.RAILWAY,
    
    // Automation & Collaboration Tools
    IconSkills.AUTOMATION,
    IconSkills.CLOUD_DEPLOYMENT,
    IconSkills.CODE_REVIEWS,
  ],
};
