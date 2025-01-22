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

import IconSkills from "../iconSkills";

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
    IconSkills.VUE,
    IconSkills.TAILWINDCSS,
    IconSkills.FASTAPI,
    IconSkills.SQLITE,
  ],
  extendedStack:[
    IconSkills.FULL_STACK,
    IconSkills.PYTHON,
    IconSkills.NETLIFY,
    IconSkills.RENDER,
    IconSkills.RESPONSIVE_DESIGN
  ],
  externalLinks: [
    { name: "Website", link: "https://job-dashboard-chace.netlify.app/", icon: IconSkills.WORLD.icon },
    { name: "Code", link: "https://github.com/ChaceN89/job-dashboard", icon: IconSkills.GITHUB.icon },
  ],
};
