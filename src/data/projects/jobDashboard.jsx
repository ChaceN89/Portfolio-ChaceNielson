/**
 * @file jobDashboard.js
 * @module jobDashboard
 * @desc Contains data for the Job Dashboard project.
 * 
 * @name Job Dashboard
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";

// Short description (blurb) to be displayed on the project card
const short = "Job dashboard for managing job applications and interviews.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project is a job dashboard application designed to help users manage their job applications and interviews. It is built with Vue.js and FastAPI, and uses SQLite for data storage.
    </p>
    <p>
      The full-stack project is deployed using Netlify and Render.
    </p>
  </div>
);

export const jobDashboard = {
  starred: true,
  id: "job-dashboard",
  name: "Job Dashboard",
  tag: "Full-Stack",
  blurb: short,
  description: long,
  images: [
    { src: "jobDashboard.jpg", blurhash: "L7Op#=4mxu?cE2IokBxb9+%jj=Mv" },
  ],
  mainStack:[
    IconLibrary.VUE,
    IconLibrary.TAILWINDCSS,
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
