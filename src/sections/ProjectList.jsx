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
  const SpaceSurviveDescription = "A video game based on asteroids. Includes multiple modes, power-ups, achievements, audio, save states and different enemy types."
  const SpaceSurviveDescription_Long = SpaceSurviveDescription + " This game was originally taken from a simple tutorial that explain the basics of player movement and implementing enemies. After learning the basics of unity games I decided to add my own style and features to the game. I added enemies each with different behaviour, game saving state, a game mangaer to control the level progressing, music, sounds effects, and more. While I stuck to the style from the original tutorial I made the game my own."

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
            description:"A longer  Desription of the proejct as Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quidem fugit voluptatum? Officiis ut dolor voluptatum, blanditiis repudiandae minima quod doloremque nam eveniet, eligendi ducimus officia exercitationem odio, tempore suscipit! ",
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
          description={SpaceSurviveDescription} 
          img={'/projectPhotos/spaceSurvive3.png'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          modalInfo = {{
            description:SpaceSurviveDescription_Long,
            videos:[
              {path:"/videos/SpaceSurvive_small.mp4", description:'Game Play'}
            ]
          }}
        />

        <ProjectCard
          name={"Flappy Bird Clone"} 
          description={"A clone of the phone game Flappy Bird, with difficulty progression and save states."} 
          img={'/projectPhotos/CopyRightBird.png'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          // internalLink={"Videos/#FlappyBird"}
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
