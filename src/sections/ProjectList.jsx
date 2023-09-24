/**
 * List of Projects 
 * both technical and other project
 * will have a project component and hobbies in the same project cards
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import {TfiWorld} from 'react-icons/tfi'
import { BsGithub} from "react-icons/bs";
import { FaUnity} from "react-icons/fa";

import ProjectCard from '../components/ProjectCard';

function ProjectList() {

  // linkgs
  const aviarLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Aviar", icon:<BsGithub size={20}/>},
  ]
  const portfolioLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Portfolio-ChaceNielson", icon:<BsGithub size={20}/>}
  ]
  const geoPredictLink =[
    {name:"Website", link:"http://136.159.140.62/", icon:<TfiWorld size={20}/>}
  ]
  const cubeGameLinks =[
    {name:"Play Game", link:"https://chacen89.github.io/CubeGame/", icon:<FaUnity size={20}/>}
  ]

  // Descriptions
  const gepPredictDescription_long = 
    <div className='space-y-2'>
      <p>
        I completed this application while working at the Energi Simulation Centre for Geothermal Systems Research at the University of Calgary. The primary objective was to develop an application for managing drilling data files for geothermal wells. The application is designed to handle security, user authentication, and the management of sensitive drilling data. Users can join organizations and share data among themselves.
      </p>
      <p>
        In addition to providing dynamic real-time data visualizations, the application included a set of analysis tools that significantly enhanced drilling efficiency. These tools encompassed physics-based models and machine-learning modules. While I didn't personally create the analysis tools, I dedicated time to reviewing and integrating code authored by others into the web application.
      </p>
      <p>
        I assumed the role of project manager, which presented the opportunity to oversee a small team. My responsibilities involved task assignment, code reviews, as well as screening resumes, conducting interviews, and delivering presentations.
      </p>
      <p>
        The application has been utilized in drilling wells located in Germany, New Mexico, and Sweden.
      </p>
    </div>

  const aviarDescription_long = " This application was completed as part of a Software Engineering class at the University of Calgary. It is a full stack application that utilizes  MongoDB database, ExpressJS backend and a ReactJS frontend. I learned a lot about CSS and React components.  Before Heroku changed their terms and conditions I had deployed the application there."

  const spaceSurviveDescription = "A video game based on asteroids. Includes multiple modes, power-ups, achievements, audio, save states and different enemy types."
  const spaceSurviveDescription_long = spaceSurviveDescription + " This game was originally taken from a simple tutorial that explain the basics of player movement and implementing enemies. After learning the basics of Unity game engine I decided to add my style and features to the game. I added enemies with different behaviours, game saving states, a game manager to control the level progress, music, sound effects, and more. While I stuck to the style from the original tutorial I made the game my own."


  // ------------------------------------------------------------------------
  // ----------------------------- HTML code --------------------------------
  // ------------------------------------------------------------------------
  return(
    <section id="MyProjects" className='section hiddenClass '>
      <SectionHeader title={"My Technical Projects"} description={"My Projects Using Various Tech Stacks"} />
      <ul className='projectCardList'>
        <ProjectCard
          name={"GEO Predict"} 
          description={"Full stack application for analysis of drilling data, large data files, react tables and the ChartJS Library. First project lead position."} 
          img={'/projectPhotos/geothermal_Dashboard.png'} 
          techStackName={"Tech Stack"}
          techStack={["ReactJS", "FastApi", "Postgres", "Tailwind", "Docker"]}
          externalLinks={geoPredictLink}
          modalInfo = {{
            description:gepPredictDescription_long,
            photos:[
              {path:"/projectPhotos/geothermal_Dashboard.png", description:'Main Drilling Visual'},
              {path:"/projectPhotos/geothermal_crossPlot.png", description:'Cross Plotting Visual'},
              {path:"/projectPhotos/geothermal_homePage.png", description:'Home Page'},
              {path:"/projectPhotos/geothermal_Login.png", description:'Login Page'}
            ],
          }}
        />
        <ProjectCard
          name={"Aviar"} 
          description={"Full stack photo sharing application. Uses JWTs for authentication of user accounts. It was deployed on Heroku."} 
          img={'/projectPhotos/aviar_collections.png'} 
          techStackName={"Mern Stack"}
          techStack={["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]}
          externalLinks={aviarLinks}
          modalInfo = {{
            description:aviarDescription_long,
            photos:[
              {path:"/projectPhotos/aviar_addPost.png", description:'Add Post Page'},
              {path:"/projectPhotos/aviar_collections.png", description:'User Photo Collections'},
              {path:"/projectPhotos/aviar_gallery.png", description:'Photo Gallery'},
              {path:"/projectPhotos/aviar_login.png", description:'Login'},
              {path:"/projectPhotos/aviar_myAccount.png", description:'User Account Page'},
            ],
          }}
        />

        <ProjectCard
          name={"Portfolio"}
          description={"My portfolio website is made with React and Tailwind. It uses regular CSS for fade-in transitions."} 
          img={'/projectPhotos/portfolio.png'} 
          techStackName={"Tech Stack"}
          techStack={["ReactJS", "Tailwind", "CSS"]}
          externalLinks={portfolioLinks} 
        />

        <ProjectCard 
          name={"Space Survive"} 
          description={spaceSurviveDescription} 
          img={'/projectPhotos/spaceSurvive3.png'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          modalInfo = {{
            description:spaceSurviveDescription_long,
            photos:[
              {path:"/projectPhotos/spaceSurvive1.png", description:''},
              {path:"/projectPhotos/spaceSurvive3.png", description:''},
            ],
            videos:[
              {path:"/videos/SpaceSurvive_small.mp4", description:'Gameplay'}
            ]
          }}
        />

        <ProjectCard
          name={"Flappy Bird Clone"} 
          description={"A clone of the phone game Flappy Bird, with difficulty progression and save states."} 
          img={'/projectPhotos/CopyRightBird.png'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#"]}
          modalInfo = {{
     
            videos:[
              {path:"/videos/FlappyBird.mp4", description:'Gameplay'}
            ]
          }}
        />
        
        <ProjectCard
          name={"Cube Game"} 
          description={"A simple game meant to explore how to create a game manager, level navigation, and endless game loops. Utilized Unity Physic Engine."} 
          img={'/projectPhotos/cubeGame1.png'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          externalLinks={cubeGameLinks} 
        />

      </ul>
    </section>
  )
}

export default ProjectList
