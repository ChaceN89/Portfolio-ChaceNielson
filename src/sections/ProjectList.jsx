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

  const aviarLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Aviar", icon:<BsGithub size={20}/>},
    // {name:"Website", link:"https://aviar.herokuapp.com/", icon: <TfiWorld size={20}/>}
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


  return(
    <section id="MyProjects" className='section hiddenClass '>
      <SectionHeader title={"My Technical Projects"} description={"My Projects Using Various Tech Stacks"} />
      <ul className='projectCardList'>
        <ProjectCard
          name={"GEO Predict"} 
          description={"Full stack application for analysis of drilling data, large data files, react tables and the ChartJS Library. First project lead position."} 
          img={'/projectPhotos/geothermalDashboard.png'} 
          techStackName={"Tech Stack"}
          techStack={["ReactJS", "FastApi", "Postgres", "Tailwind", "Docker"]}
          externalLinks={geoPredictLink}
        />
        <ProjectCard
          name={"Aviar"} 
          description={"Full stack photo sharing application. Uses JWTs for authentication of user accounts. It was deployed on Heroku."} 
          img={'/projectPhotos/aviar_collections.png'} 
          techStackName={"Mern Stack"}
          techStack={["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]}
          externalLinks={aviarLinks}
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
          description={"A video game based on asteroids. Includes multiple modes, power-ups, achievements, save states and different enemy behaviours/types. "} 
          img={'/projectPhotos/spaceSurvive3.png'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          internalLink={"Videos/#SpaceSurvive"}  
        />
        <ProjectCard
          name={"Flappy Bird Clone"} 
          description={"A clone of the phone game Flappy Bird, with difficulty progression and save states."} 
          img={'/projectPhotos/CopyRightBird.png'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          internalLink={"Videos/#FlappyBird"}
        />
        <ProjectCard
          name={"Cube Game"} 
          description={"A simple game meant to explore how to create a game manager, level navigation, and endless game loops."} 
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
