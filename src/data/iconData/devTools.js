/**
 * @file devTools.js
 * @module devTools
 * @desc Contains all icons related to development tools and environments.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { BsGithub } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { ImGit } from "react-icons/im";
import { SiRailway, SiRender, SiVercel } from "react-icons/si";
import { SiAsana } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiFlowChart } from "react-icons/ri";


const folder = "devTools";

const devToolIcons = {
  NETLIFY: { name: "Netlify", svg_path: `${folder}/netlify.svg` },
  VERCEL: { name: "Vercel", icon: SiVercel, color: "black" },
  RAILWAY: { name: "Railway", icon: SiRailway, color: "black" },
  RENDER: { name: "Render", icon: SiRender, color: "black" },
  GITHUB: { name: "GitHub", icon: BsGithub, color: "white" },
  GIT: { name: "Git", icon: ImGit, color: "#EE513B" },
  DOCKER: { name: "Docker", icon: FaDocker, color: "#089CEC" },
  CI_CD: { name: "CI/CD", svg_path: `${folder}/ci-cd.svg` },
      
  CLOUD_DEPLOYMENT: { name: "Cloud Deployment", svg_path: `${folder}/cloud-computer.svg` },
  AUTHENTICATION: { name: "Authentication", svg_path: `${folder}/authentication.svg` },
  JWT: { name: "JWT", svg_path: `${folder}/jwt.svg` },
  OAUTH: { name: "OAuth Protocol", svg_path: `${folder}/oauth.svg` },

  CODE_REVIEWS: { name: "Code Reviews", icon: GoCodeReview, color: 'black' },
  AUTOMATION: { name: "Automation", svg_path: `${folder}/automation.svg` }, 

  AGILE_TOOLS: { name: "Agile Tools", svg_path: `${folder}/agile.svg` },  
  ASANA: { name: "Asana", icon: SiAsana, color: "black" },

  DOCUMENTATION: { name: "Documentation", icon: HiOutlineDocumentText, color: "white" },
  SOFTWARE_ARCHITECTURE: { name: "Software Architecture", icon: RiFlowChart, color: "white" },
};


export default devToolIcons;
