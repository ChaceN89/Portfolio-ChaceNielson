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

// Short description (blurb) to be displayed on the project card
const short = "A job manager built with FastAPI and Vue.js, featuring dark mode styles.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-2">
    <p>
      The <span className="font-bold">Job Dashboard</span> is a web app designed to help users track and manage job applications and interviews. It uses <span className="font-bold">FastAPI</span> for backend processing and <span className="font-bold">SQLite</span> for reliable data storage.
    </p>
    <p>
      The frontend, built with <span className="font-bold">Vue.js</span> and styled with <span className="font-bold">Tailwind CSS</span>, is simple and features a sleek <span className="font-bold">dark mode</span>. The app is deployed on <span className="font-bold">Netlify</span> and <span className="font-bold">Render</span> for scalability and performance.
    </p>
  </div>
);

export const jobDashboard = {
  starred: true,
  id: "job-dashboard",
  name: "Job Dashboard",
  tag: "Backend",
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
