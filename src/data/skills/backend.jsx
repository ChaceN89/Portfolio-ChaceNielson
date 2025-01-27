/**
 * @file backend.js
 * @desc Contains data for the Backend Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import IconLibrary from "../iconLibrary";
import { projects } from "../pageData/projectData";
import { geoPredict } from "../projects/geoPredict";
import { imageProcessor } from "../projects/imageProcessor";
import { jobDashboard } from "../projects/jobDashboard";
import { photoApp } from "../projects/photoApp";

export const backend = { 
  id: "backend-development",
  name: "Backend Development", 
  linkName: "Explore My Tools and Applications", 
  description: (
    <span>
     With expertise in server-side logic, database architecture, and scalable APIs, I design powerful backends to support modern applications.
    </span>
  ),
  topSkills: [
    IconLibrary.PYTHON,
    IconLibrary.EXPRESSJS,
    IconLibrary.DJANGO,
    IconLibrary.POSTGRESQL,
  ],
  minorSkills: [
    // Core Backend Skills
    IconLibrary.FASTAPI,
    IconLibrary.REST_API,
    IconLibrary.NODE_JS,
    IconLibrary.RDS,
    IconLibrary.S3,
    
    // Databases & Storage
    IconLibrary.MONGODB,
    IconLibrary.MYSQL,
    IconLibrary.SQLITE,
    IconLibrary.AUTHENTICATION,
    IconLibrary.JWT,
    IconLibrary.OAUTH,


    // Backend Frameworks & Tools
    IconLibrary.SWAGGER_UI,
    IconLibrary.PLOTLY_DASH,

    // Data Processing & Machine Learning
    IconLibrary.APACHE_SPARK,
    IconLibrary.DATA_ANALYSIS,
    IconLibrary.MACHINE_LEARNING,
    IconLibrary.JUPYTER,
    IconLibrary.TENSORFLOW
  ],

  relatedProjects:[
    geoPredict,
    photoApp,
    imageProcessor,
    jobDashboard
  ]
};
