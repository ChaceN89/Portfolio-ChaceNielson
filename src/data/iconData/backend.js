import { FaNode, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiFastapi } from "react-icons/si";

const backendIcons = {
  EXPRESSJS: { name: "ExpressJS", icon: FaNodeJs, color: "#3FA040" },    
  FASTAPI: { name: "FastAPI", icon: SiFastapi, color: "#079487" },
  DJANGO: { name: "Django", icon: SiDjango, color: "#FF4B4B" },
  REST_API: { name: "REST API", svg_path: "rest-api.svg" },
  NODE_JS: { name: "Node.js", icon: FaNode, color: "#68A063" },
  FULL_STACK: { name: "Full-Stack", svg_path: "full-stack.svg" },

};

export default backendIcons;