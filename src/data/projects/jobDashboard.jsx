/**
 * @file jobDashboard.js
 * @module jobDashboard
 * @desc Contains data for the Job Dashboard project.
 * 
 * @name Job Dashboard
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 27th, 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "A job manager built with FastAPI and Vue.js, featuring dark mode styles.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      The <BoldSpan>Job Dashboard</BoldSpan> is a web app designed to help users track and manage job applications and interviews. It uses <BoldSpan>FastAPI</BoldSpan> for backend processing and <BoldSpan>SQLite</BoldSpan> for reliable data storage.
    </p>
    <p>
      The frontend, built with <BoldSpan>Vue.js</BoldSpan> and styled with <BoldSpan>Tailwind CSS</BoldSpan>, is simple and features a sleek <BoldSpan>dark mode</BoldSpan>. The app is deployed on <BoldSpan>Netlify</BoldSpan> and <BoldSpan>Render</BoldSpan> for scalability and performance.
    </p>
  </div>
);

export const jobDashboard = {
  starred: true,
  id: "job-dashboard",
  name: "Job Dashboard",
  tags: ["Web App", "Job Tracker", "FastAPI"],
  blurb: short,
  description: long,
  images: [
    { src: "jobDashboard.jpg", blurhash: "L7Op#=4mxu?cE2IokBxb9+%jj=Mv" },
  ],
  mainStack:[
    IconLibrary.VUE,
    IconLibrary.TAILWIND,
    IconLibrary.FASTAPI,
    IconLibrary.SQLITE,
  ],
  extendedStack:[
    IconLibrary.FULL_STACK,
    IconLibrary.PYTHON,
    IconLibrary.NETLIFY,
    IconLibrary.RENDER,
    IconLibrary.RESPONSIVE_DESIGN
  ],
  externalLinks: [
    { name: "Website", link: "https://job-dashboard-chace.netlify.app/", icon: IconLibrary.WORLD.icon },
    { name: "Code", link: "https://github.com/ChaceN89/job-dashboard", icon: IconLibrary.GITHUB.icon },
  ],
};
