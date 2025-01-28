/**
 * @file geoPredict.js
 * @module geoPredict
 * @desc Contains data for the GEO Predict project.
 * 
 * @name GEO Predict
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-21
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";

// Short description (blurb) to be displayed on the project card
const short = "AI-powered app for managing and analyzing drilling data in real time.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className="space-y-4">
    <p>
      <span className="font-bold">GEO Predict</span> is a full-stack web application designed to enable users to upload, manage, and analyze drilling data using advanced <span className="font-bold">machine learning models</span>. The goal of the application is to predict drilling data outcomes and assist in optimizing operations.
    </p>
    <p>
      This project was developed during my time at the <span className="font-bold">Energi Simulation Centre for Geothermal Systems Research</span> at the University of Calgary. The application leverages modern technologies, including <span className="font-bold">React</span>, <span className="font-bold">Tailwind CSS</span>, <span className="font-bold">FastAPI</span>, and <span className="font-bold">PostgreSQL</span>. Deployment is managed using <span className="font-bold">Docker</span> and the University of Calgary's <span className="font-bold">Cloud Stack</span>.
    </p>
    <p>
      <span className="underline font-semibold">Key Features</span>
      <ul className="list-disc list-inside pl-5">
        <li>Comprehensive management of drilling data</li>
        <li>Sharing of data across teams and organizations</li>
        <li>Real-time data visualization for live wells</li>
        <li>
          Integration with <span className="font-bold">Pason</span> to fetch live well data using <span className="font-bold">WITSML</span>
        </li>
        <li>Secure authentication and access control</li>
        <li>Organization-based user collaboration</li>
        <li>Used for active  geothermal drilling operations in <span className="font-bold">Germany</span>, <span className="font-bold">New Mexico</span>, and <span className="font-bold">Sweden</span>.</li>
      </ul>
    </p>
    <p>
      <span className="underline font-semibold">Primary Objective</span>
      <br />
      The primary aim of this project was to develop a secure application for managing sensitive geothermal drilling data. The application supports features like data sharing among organizations, real-time updates, and robust security mechanisms to ensure the integrity and confidentiality of drilling information.
    </p>
    <p>
      <span className="underline font-semibold">My Responsibilities</span>
      <ul className="list-disc list-inside pl-5">
        <li>Oversaw the project as <span className="font-bold">Project Manager</span></li>
        <li>Assigned tasks and conducted code reviews</li>
        <li>Reviewed CVs and conducted technical interviews</li>
        <li>Delivered presentations to stakeholders</li>
      </ul>
    </p>
  </div>
);



export const geoPredict = {
  starred: true,
  id: "geo-predict", // id and folder name in the projects folder
  name: "GEO Predict",
  tag: "Full-Stack",
  blurb: short,
  description: long,
  images: [
    { src: "highlight.jpg", blurhash: "G39%h%.lA8yWNExv4.t600%M^,X7-qITNG9Y" },
    { src: "crossPlot.jpg", blurhash: "q2Hog|GOtj%4nAwQ$n$-=OnBr_kBX4XNkUbq+S#uVtNYXfXNNrSb*EPKSva3nAm@m@nADhaMxcs;NFR%ozoy:vr2srgJS[Xfkob=" },
    { src: "homePage.jpg", blurhash: "qANAxJD*9Z%LNGxvRixu00t7?bV@-;R*%LWB~WaxD%bIIUt6M|WCIVt6adR+Rjn~WYR+00WBxtogs;j=j]a#IAj[RjjFWBWqV@of" },
    { src: "login.jpg", blurhash: "q7Mtjn8^xU-oVrxsn#t6xtRia_odj?a_axj[9a?wNyIpo$R.bcWC-=x^a%RnWFj^j]WV^kDinN%2nOnhjExaxWMwsjxWs*n#jYoJ" },
  ],
  youtubeEmbed: "https://www.youtube.com/watch?v=oTU0C_8-dSw",
  mainStack: [
    IconLibrary.REACT,
    IconLibrary.FASTAPI,
    IconLibrary.POSTGRESQL,
    IconLibrary.TAILWIND,
  ],
  extendedStack: [
    IconLibrary.FULL_STACK,
    IconLibrary.PYTHON,
    IconLibrary.DOCKER,
    IconLibrary.REDUX,
    IconLibrary.DATA_ANALYSIS,
    IconLibrary.CLOUD_DEPLOYMENT,
    IconLibrary.MACHINE_LEARNING,
    IconLibrary.AUTHENTICATION,
    IconLibrary.LEADERSHIP,
    IconLibrary.CODE_REVIEWS,
    IconLibrary.DATA_VISUALIZATION,
  ],
  externalLinks: [
    { name: "Website", link: "http://136.159.140.62/", icon: IconLibrary.WORLD.icon },
  ],
};
