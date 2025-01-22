/**
 * @file iconSkills.js
 * @module iconSkills
 * @desc Contains enumeration for technical skills and their corresponding icons.
 * Enumeration of technical skills with corresponding icons and svg paths or react-icons and react-icon color.
 * 
 * @example - FOR TESTING PURPOSES - VIEW ALL SKILLS/ICONS
 * import IconSkills from '../data/iconSkills';
 * 
 * const allSkills = [
 *   IconSkills.REACT, IconSkills.JAVASCRIPT, IconSkills.TAILWINDCSS, 
 *   IconSkills.NODE_JS, IconSkills.PYTHON, IconSkills.EXPRESS_JS, 
 *   IconSkills.FASTAPI, IconSkills.POSTGRESQL, IconSkills.GITHUB, 
 *   IconSkills.GIT, IconSkills.JAVA, IconSkills.CPP, IconSkills.WEB_DESIGN, 
 *   IconSkills.CODE_REVIEWS, IconSkills.UNITY, IconSkills.BLENDER, 
 *   IconSkills.CSHARP, IconSkills.ANIMATION, IconSkills.SIMULATION, 
 *   IconSkills.ENGINEERING, IconSkills.DESIGN, IconSkills.CIRCUITY, 
 *   IconSkills.GAME_DEVELOPMENT, IconSkills.UNITY_PHYSICS, 
 *   IconSkills.PLASTIC_SCM, IconSkills.PLOTLY_DASH, IconSkills.APACHE_SPARK, 
 *   IconSkills.JUPYTER, IconSkills.MACHINE_LEARNING, IconSkills.FULL_STACK, 
 *   IconSkills.DOCKER, IconSkills.DATA_ANALYSIS, IconSkills.CLOUD_DEPLOYMENT, 
 *   IconSkills.AUTHENTICATION, IconSkills.FRAMER_MOTION, IconSkills.BLURHASH, 
 *   IconSkills.NETLIFY, IconSkills.VERCEL, IconSkills.RAILWAY, IconSkills.RENDER, 
 *   IconSkills.VUE, IconSkills.MAPBOX_GL, IconSkills.MONGODB, IconSkills.TYPESCRIPT, 
 *   IconSkills.EXPRESSJS, IconSkills.TAILWIND, IconSkills.WORLD, IconSkills.YOUTUBE, 
 *   IconSkills.INSTAGRAM, IconSkills.LINKEDIN, IconSkills.STREAMLIT, 
 *   IconSkills.DJANGO, IconSkills.MYSQL, IconSkills.SQLITE, IconSkills.REST_API, 
 *   IconSkills.HADOOP, IconSkills.VS_CODE, IconSkills.CI_CD, IconSkills.AWS, 
 *   IconSkills.CHART_JS, IconSkills.REDUX, IconSkills.HTML, IconSkills.CSS, 
 *   IconSkills.MUSIC, IconSkills.SNOWBOARDING, IconSkills.BASKETBALL, 
 *   IconSkills.GUITAR, IconSkills.HIKING, IconSkills.MOUNTAIN_CLIMBING, 
 *   IconSkills.BIKING, IconSkills.SWIMMING, IconSkills.PDF, 
 *   IconSkills.PROBLEM_SOLVING, IconSkills.TEAM_COLLABORATION, 
 *   IconSkills.COMMUNICATION, IconSkills.TIME_MANAGEMENT, IconSkills.LEADERSHIP, 
 *   IconSkills.INTERPERSONAL_SKILLS, IconSkills.ADAPTABILITY, 
 *   IconSkills.CRITICAL_THINKING, IconSkills.CREATIVITY, 
 *   IconSkills.SELF_MOTIVATION
 * ];
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-08-21
 */

import { FaReact, FaNodeJs, FaUnity, FaNode, FaDocker, FaMusic, FaSnowboarding, FaBasketballBall, FaGuitar, FaHiking, FaBiking, FaSwimmer, FaItchIo } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { ImGit } from "react-icons/im";
import { SiFastapi, SiTailwindcss, SiMongodb, SiApachespark, SiJupyter, SiTypescript, SiRender, SiVercel, SiRailway, SiStreamlit, SiDjango, SiChartdotjs, SiRedux, SiMapbox } from "react-icons/si";
import { MdOutlineAnimation, MdOutlineBlurOn } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsFileEarmarkPdf } from "react-icons/bs";
import { GiMountainClimbing } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { GoCodeReview } from "react-icons/go";

// Enumeration of technical skills with corresponding icons and svg paths or react-icons and react-icon color
const IconSkills = {
  REACT: { name: "React", icon: FaReact, color: "lightblue" },
  JAVASCRIPT: { name: "JavaScript", svg_path: "javascript.svg" },
  TAILWINDCSS: { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF9" },
  NODE_JS: { name: "Node.js", icon: FaNode, color: "#68A063" },
  RESPONSIVE_DESIGN: { name: "Responsive Design", svg_path: "responsive-design.svg" },
  STATEMANAGEMENT: { name: "State Management", svg_path: "state-management.svg" },
  
  PYTHON: { name: "Python", svg_path: "python.svg" },
  EXPRESS_JS: { name: "Express.js", icon: FaNodeJs, color: "#079487" },
  FASTAPI: { name: "FastAPI", icon: SiFastapi, color: "#079487" },
  POSTGRESQL: { name: "PostgreSQL", icon: DiPostgresql, color: "white" },
  
  GITHUB: { name: "GitHub", icon: BsGithub, color: "white" },
  GIT: { name: "Git", icon: ImGit, color: "#EE513B" },
  JAVA: { name: "Java", svg_path: "java.svg" },
  CPP: { name: "C++", svg_path: "c-plus-plus.svg" },
  WEB_DESIGN: { name: "Web Design", svg_path: "web-design.svg" },
  CODE_REVIEWS: { name: "Code Reviews", icon: GoCodeReview, color: 'black' },
  AUTOMATION: { name: "Automation", svg_path: "automation.svg" }, 
  
  UNITY: { name: "Unity", icon: FaUnity, color: "white" },
  BLENDER: { name: "Blender", svg_path: "blender.svg" },
  CSHARP: { name: "C#", svg_path: "c-sharp.svg" },
  ANIMATION: { name: "Animation", icon: MdOutlineAnimation, color: "white" },
  
  SIMULATION: { name: "Simulation", svg_path: "computer.svg" },
  ENGINEERING: { name: "Engineering", svg_path: "engineering.svg" },
  DESIGN_3D: { name: "3D Design", svg_path: "3d-cube.svg" },
  CIRCUITY: { name: "Circuity Design", svg_path: "circuit-board.svg" },
  FABRICATION: { name: "Fabrication", svg_path: "fabrication.svg" },
  DATA_VISUALIZATION: { name: "Data Visualization", svg_path: "data-visualization.svg" },
  
  GAME_DEVELOPMENT: { name: "Game Development", svg_path: "game-controller.svg" },
  UNITY_PHYSICS: { name: "Unity Physics System", svg_path: "physics.svg" },
  PLASTIC_SCM: { name: "Plastic SCM", svg_path: "plastic-scm.svg" },
  OPEN_HAPTICS: { name: "Open Haptics", svg_path: "haptics.svg" },
  HAPTIC_STYLUS: { name: "Haptic Stylus", svg_path: "stylus.svg" },

  
  PLOTLY_DASH: { name: "Plotly Dash", svg_path: "plotly-dash.svg" },
  APACHE_SPARK: { name: "Apache Spark", icon: SiApachespark, color: "#E25A1B" },
  JUPYTER: { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
  MACHINE_LEARNING: { name: "Machine Learning", svg_path: "machine-learning.svg" },
  
  FULL_STACK: { name: "Full-Stack", svg_path: "full-stack.svg" },
  DOCKER: { name: "Docker", icon: FaDocker, color: "#089CEC" },
  DATA_ANALYSIS: { name: "Data Analysis", svg_path: "data-analysis.svg" },
  CLOUD_DEPLOYMENT: { name: "Cloud Deployment", svg_path: "cloud-computer.svg" },
  AUTHENTICATION: { name: "Authentication", svg_path: "authentication.svg" },
  
  FRAMER_MOTION: { name: "Framer Motion", icon: TbBrandFramerMotion, color: "black" },
  BLURHASH: { name: "BlurHash", icon: MdOutlineBlurOn, color: "black" },
  
  NETLIFY: { name: "Netlify", svg_path: "netlify.svg" },
  VERCEL: { name: "Vercel", icon: SiVercel, color: "black" },
  RAILWAY: { name: "Railway", icon: SiRailway, color: "black" },
  RENDER: { name: "Render", icon: SiRender, color: "black" },
  
  VUE: { name: "Vue", svg_path: "vue.svg" },
  MAPBOX_GL: { name: "Mapbox GL", icon: SiMapbox, color: "black" },
  MONGODB: { name: "MongoDB", icon: SiMongodb, color: "#4DA53F" },
  TYPESCRIPT: { name: "TypeScript", icon: SiTypescript, color: "#38BDF9" },
  EXPRESSJS: { name: "ExpressJS", icon: FaNodeJs, color: "#3FA040" },
  TAILWIND: { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF9" },
  
  WORLD: { name: "World", icon: TfiWorld, color: "black" },
  YOUTUBE: { name: "YouTube", icon: BsYoutube, color: "red" },
  INSTAGRAM: { name: "Instagram", icon: BsInstagram, color: "white" },
  LINKEDIN: { name: "LinkedIn", icon: BsLinkedin, color: "white" },
  ITCHIO: { name: "Itch.io", icon: FaItchIo, color: "black" },
  
  STREAMLIT: { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
  DJANGO: { name: "Django", icon: SiDjango, color: "#FF4B4B" },
  MYSQL: { name: "MySQL", icon: GrMysql, color: '#01618A' },
  SQLITE: { name: "SQLite", svg_path: "sqlite.svg" },
  REST_API: { name: "REST API", svg_path: "rest-api.svg" },
  
  HADOOP: { name: "Hadoop", svg_path: "hadoop.svg" },
  VS_CODE: { name: "VS Code", svg_path: "vs-code.svg" },
  CI_CD: { name: "CI/CD", svg_path: "ci-cd.svg" },
  
  AWS: { name: "AWS", svg_path: "aws.svg" },
  CHART_JS: { name: "Chart.js", icon: SiChartdotjs, color: '#FE777B' },
  REDUX: { name: "Redux", icon: SiRedux, color: '#4A4ABC' },
  HTML: { name: "HTML", svg_path: "html-5.svg" },
  CSS: { name: "CSS", svg_path: "css-3.svg" },
  
  MUSIC: { name: "Music", icon: FaMusic, color: "black" },
  SNOWBOARDING: { name: "Snowboarding", icon: FaSnowboarding, color: "black" },
  BASKETBALL: { name: "Basketball", icon: FaBasketballBall, color: "black" },
  GUITAR: { name: "Guitar", icon: FaGuitar, color: "black" },
  HIKING: { name: "Hiking", icon: FaHiking, color: "black" },
  MOUNTAIN_CLIMBING: { name: "Mountain Climbing", icon: GiMountainClimbing, color: "black" },
  BIKING: { name: "Biking", icon: FaBiking, color: "black" },
  SWIMMING: { name: "Swimming", icon: FaSwimmer, color: "black" },
  
  PDF: { name: "PDF", icon: BsFileEarmarkPdf, color: "black" },
  
  PROBLEM_SOLVING: { name: "Problem Solving", svg_path: "problem-solving.svg" },
  TEAM_COLLABORATION: { name: "Collaboration", svg_path: "collaboration.svg" },
  COMMUNICATION: { name: "Communication", svg_path: "communication.svg" },
  TIME_MANAGEMENT: { name: "Time Management", svg_path: "clock.svg" },
  LEADERSHIP: { name: "Leadership", svg_path: "leadership.svg" },
  
  INTERPERSONAL_SKILLS: { name: "Interpersonal Skills", svg_path: "interpersonal-skills.svg" },
  ADAPTABILITY: { name: "Adaptability", svg_path: "adaptation.svg" },
  CRITICAL_THINKING: { name: "Critical Thinking", svg_path: "critical-thinking.svg" },
  CREATIVITY: { name: "Creativity", svg_path: "creativity.svg" },
  SELF_MOTIVATION: { name: "Self Motivation", svg_path: "self-motivation.svg" },

  SEO: { name: "SEO", svg_path: "seo.svg" },
  PWA: { name: "Progressive Web Apps", svg_path: "pwa.svg" },
  EMAILJS: { name: "Email.js", svg_path: "emailjs.svg" },
};

export default IconSkills;
