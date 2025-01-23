import { BsGithub } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { ImGit } from "react-icons/im";
import { SiRailway, SiRender, SiVercel } from "react-icons/si";

const devToolIcons = {
  NETLIFY: { name: "Netlify", svg_path: "netlify.svg" },
  VERCEL: { name: "Vercel", icon: SiVercel, color: "black" },
  RAILWAY: { name: "Railway", icon: SiRailway, color: "black" },
  RENDER: { name: "Render", icon: SiRender, color: "black" },
  GITHUB: { name: "GitHub", icon: BsGithub, color: "white" },
  GIT: { name: "Git", icon: ImGit, color: "#EE513B" },
  DOCKER: { name: "Docker", icon: FaDocker, color: "#089CEC" },
  CI_CD: { name: "CI/CD", svg_path: "ci-cd.svg" },

      
  CLOUD_DEPLOYMENT: { name: "Cloud Deployment", svg_path: "cloud-computer.svg" },
  AUTHENTICATION: { name: "Authentication", svg_path: "authentication.svg" },

  CODE_REVIEWS: { name: "Code Reviews", icon: GoCodeReview, color: 'black' },
  AUTOMATION: { name: "Automation", svg_path: "automation.svg" }, 
  

  
};

export default devToolIcons