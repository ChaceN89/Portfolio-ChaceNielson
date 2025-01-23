/**
 * @file backend.js
 * @module backend
 * @desc Contains all icons related to backend development and tools.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { FaNode, FaNodeJs } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";

const folder = "backend";

const backendIcons = {
  FULL_STACK: { name: "Full-Stack", svg_path: `${folder}/full-stack.svg` },
  NODE_JS: { name: "Node.js", icon: FaNode, color: "#68A063" },
  REST_API: { name: "RESTful API", svg_path: `${folder}/rest-api.svg` },
  SWAGGER_UI: { name: "Swagger UI", svg_path: `${folder}/swagger.svg` },
  EXPRESSJS: { name: "ExpressJS", icon: FaNodeJs, color: "#3FA040" },    
  FASTAPI: { name: "FastAPI", icon: SiFastapi, color: "#079487" },
  DJANGO: { name: "Django", svg_path: `${folder}/django.svg` },
};

export default backendIcons;