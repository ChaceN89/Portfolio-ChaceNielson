/**
 * @file backend.js
 * @module backend
 * @desc Contains all icons related to backend development and tools.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { FaNode } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";

const folder = "backend";

const backendIcons = {
  FULL_STACK: { name: "Full-Stack", svg_path: `${folder}/full-stack.svg` },
  NODE_JS: { name: "Node.js", icon: FaNode, color: "#7FC97F" },
  REST_API: { name: "RESTful API", svg_path: `${folder}/rest-api.svg` },
  SWAGGER_UI: { name: "Swagger UI", svg_path: `${folder}/swagger.svg` },
  EXPRESSJS: { name: "Express", svg_path: `${folder}/express.svg` },
  FASTAPI: { name: "FastAPI", icon: SiFastapi, color: "#7FC97F" },
  DJANGO: { name: "Django", svg_path: `${folder}/django.svg` },
};

export default backendIcons;