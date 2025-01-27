/**
 * @file devOps.js
 * @desc Contains data for the DevOps skills section.
 * 
 * @author Chace Nielson
 * @created Jan 23, 2025
 * @updated Jan 23, 2025
 */

import IconLibrary from "../iconLibrary";
import { geoPredict } from "../projects/geoPredict";
import { glassGeckoGames } from "../projects/glassGecko";
import { imageProcessor } from "../projects/imageProcessor";
import { jobDashboard } from "../projects/jobDashboard";
import { portfolio } from "../projects/portfolio";

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
    IconLibrary.AWS,
    IconLibrary.DOCKER,
    IconLibrary.CI_CD,
    IconLibrary.GIT,
  ],
  minorSkills: [
    // Version Control
    IconLibrary.GITHUB,
    IconLibrary.AGILE_TOOLS,

    // Infrastructure Management
    IconLibrary.AMPLIFY,
    IconLibrary.RDS,
    IconLibrary.S3,
    IconLibrary.TERRAFORM,

    // Deployment & Hosting Platforms
    IconLibrary.NETLIFY,
    IconLibrary.VERCEL,
    IconLibrary.RENDER,
    IconLibrary.RAILWAY,
    
    // Automation & Collaboration Tools
    IconLibrary.AUTOMATION,
    IconLibrary.CLOUD_DEPLOYMENT,
    IconLibrary.CODE_REVIEWS,
  ],
  relatedProjects:[
    glassGeckoGames,
    geoPredict,
    imageProcessor,
    jobDashboard,
    portfolio,
  ]
};
