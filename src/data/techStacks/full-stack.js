/**
 * @file fullstack.js
 * @module skills/fullstack
 * @desc Contains data for the Full Stack Development specialization section.
 *
 * @author Chace Nielson
 * @created May 12, 2025
 * @updated May 12, 2025
 */

import IconLibrary from "../iconLibrary";


export const fullstack = {
  id: "fullstack-development",
  name: "Full Stack Development",
  linkName: "Explore Full Stack Projects & Tools",

  description: "From animated elements that make sites stand out to complex, data-driven applications with dynamic user interactions, I build custom full stack solutions tailored to each project's needs.",

  longDescription: "From animated elements that make sites stand out to complex, data-driven applications with dynamic user interactions, I develop full stack solutions across the entire web stack. My work spans static homepages, RESTful APIs, and integrated platforms with external databases, user authentication, and modern deployment pipelines on AWS and Vercel. I focus on creating seamless experiences that are both functional and visually engaging.",

  commonTools: [
    IconLibrary.REACT,
    IconLibrary.NEXT,
    IconLibrary.TAILWIND,
    IconLibrary.AWS,
    IconLibrary.TYPESCRIPT,     // Strong typing & modern dev best practices
    IconLibrary.EXPRESSJS,      // Widely used backend framework, shows full stack fluency
    IconLibrary.DOCKER,         // Signals DevOps knowledge and deploy readiness
    IconLibrary.GITHUB,         // Team collaboration, CI/CD, open source familiarity
  ],

  allTools: [
  {
    category: "Frontend",
    skills: [
      IconLibrary.REACT,
      IconLibrary.VITE,
      IconLibrary.NEXT,
      IconLibrary.VUE,
      IconLibrary.TAILWIND,
      IconLibrary.JAVASCRIPT,
      IconLibrary.TYPESCRIPT,
      IconLibrary.HTML,
      IconLibrary.CSS,
      IconLibrary.RESPONSIVE_DESIGN,
      IconLibrary.FRAMER_MOTION,
      IconLibrary.REDUX,
      IconLibrary.PWA,
      IconLibrary.SEO,
      IconLibrary.CHART_JS,
      IconLibrary.MAPBOX_GL,
    ],
  },
  {
    category: "Backend",
    skills: [
      IconLibrary.NODE_JS,
      IconLibrary.EXPRESSJS,
      IconLibrary.DJANGO,
      IconLibrary.FASTAPI,
      IconLibrary.REST_API,
      IconLibrary.SWAGGER_UI,
      IconLibrary.AUTHENTICATION,
      IconLibrary.JWT,
      IconLibrary.OAUTH,
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      IconLibrary.MONGODB,
      IconLibrary.MYSQL,
      IconLibrary.SQLITE,
      IconLibrary.POSTGRESQL,
      IconLibrary.RDS,
      IconLibrary.S3,
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      IconLibrary.AWS,
      IconLibrary.AMPLIFY,
      IconLibrary.TERRAFORM,
      IconLibrary.CLOUD_DEPLOYMENT,
    ],
  },
  {
    category: "Deployment Platforms",
    skills: [
      IconLibrary.VERCEL,
      IconLibrary.NETLIFY,
      IconLibrary.RENDER,
      IconLibrary.RAILWAY,
    ],
  },
  {
    category: "DevOps & CI/CD",
    skills: [
      IconLibrary.CI_CD,
      IconLibrary.DOCKER,
      IconLibrary.GIT,
      IconLibrary.GITHUB,
    ],
  },
  {
    category: "Tooling & Collaboration",
    skills: [
      IconLibrary.AUTOMATION,
      IconLibrary.AGILE_TOOLS,
      IconLibrary.CODE_REVIEWS,
    ],
  },
  {
    category: "Data & Machine Learning",
    skills: [
      IconLibrary.PYTHON,
      IconLibrary.JUPYTER,
      IconLibrary.DATA_ANALYSIS,
      IconLibrary.DATA_VISUALIZATION,
      IconLibrary.MACHINE_LEARNING,
      IconLibrary.TENSORFLOW,
      IconLibrary.APACHE_SPARK,
      IconLibrary.PLOTLY_DASH,
      IconLibrary.STREAMLIT,
    ],
  },
  {
    category: "Monitoring & Analytics",
    skills: [
      IconLibrary.GOOGLE_ANALYTICS,
      IconLibrary.EMAIL_JS,
    ],
  },
]


};
