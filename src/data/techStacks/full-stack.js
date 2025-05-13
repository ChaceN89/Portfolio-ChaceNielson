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
    IconLibrary.VITE,
    IconLibrary.EXPRESSJS,
    IconLibrary.MONGODB,
    
    IconLibrary.NEXT,
    IconLibrary.JAVASCRIPT,
    IconLibrary.TAILWIND,
    IconLibrary.AWS,
  ],

  otherTools: [

    {
      category: "Frontend",
      skills: [
        IconLibrary.REACT,
        IconLibrary.VITE,
        IconLibrary.NEXT,
        IconLibrary.TAILWIND,
        IconLibrary.JAVASCRIPT,
        IconLibrary.TYPESCRIPT,
        IconLibrary.VUE,
        IconLibrary.HTML,
        IconLibrary.CSS,
        IconLibrary.RESPONSIVE_DESIGN,
        IconLibrary.FRAMER_MOTION,
      ],
    },
    {
      category: "Backend",
      skills: [
        IconLibrary.EXPRESSJS,
        IconLibrary.NODE_JS,
        IconLibrary.REST_API,
        IconLibrary.JWT,
        IconLibrary.OAUTH,
        IconLibrary.SQLITE,
        IconLibrary.POSTGRESQL,
        IconLibrary.DJANGO,
      ],
    }, 
    {
      category: "DevOps & CI/CD",
      skills: [
        IconLibrary.CI_CD,
        IconLibrary.DOCKER,
        IconLibrary.GIT,
        IconLibrary.GITHUB,
        IconLibrary.CODE_REVIEWS,
        IconLibrary.AUTOMATION,
        IconLibrary.AGILE_TOOLS,
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        IconLibrary.AWS,
        IconLibrary.AMPLIFY,
        IconLibrary.S3,
        IconLibrary.RDS,
        IconLibrary.TERRAFORM,
        IconLibrary.VERCEL,
        IconLibrary.NETLIFY,
        IconLibrary.CLOUD_DEPLOYMENT,
      ],
    },
    {
      category: "Authentication & Security",
      skills: [
        IconLibrary.AUTHENTICATION,
        IconLibrary.JWT,
        IconLibrary.OAUTH,
      ],
    },
    
    {
      category: "Data & Analytics Tools",
      skills: [
        IconLibrary.STREAMLIT,
        IconLibrary.PLOTLY_DASH,
        IconLibrary.DATA_VISUALIZATION,
        IconLibrary.JUPYTER,
        IconLibrary.DATA_ANALYSIS,
        IconLibrary.HADOOP,
        IconLibrary.APACHE_SPARK,
        IconLibrary.MACHINE_LEARNING,
        IconLibrary.TENSORFLOW,
      ],
    }
  ],

};
