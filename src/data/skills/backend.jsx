/**
 * @file backend.js
 * @desc Contains data for the Backend Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import IconSkills from "../iconLibrary";

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
    IconSkills.PYTHON,
    IconSkills.EXPRESSJS,
    IconSkills.DJANGO,
    IconSkills.POSTGRESQL,
  ],
  minorSkills: [
    // Core Backend Skills
    IconSkills.FASTAPI,
    IconSkills.REST_API,
    IconSkills.NODE_JS,
    IconSkills.RDS,
    IconSkills.S3,
    
    // Databases & Storage
    IconSkills.MONGODB,
    IconSkills.MYSQL,
    IconSkills.SQLITE,
    IconSkills.AUTHENTICATION,
    IconSkills.JWT,
    IconSkills.OAUTH,


    // Backend Frameworks & Tools
    IconSkills.SWAGGER_UI,
    IconSkills.PLOTLY_DASH,

    // Data Processing & Machine Learning
    IconSkills.APACHE_SPARK,
    IconSkills.DATA_ANALYSIS,
    IconSkills.MACHINE_LEARNING,
    IconSkills.JUPYTER,
    IconSkills.TENSORFLOW
  ]
};
