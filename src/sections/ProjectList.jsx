/**
 * List of Projects 
 * both technical and other project
 * will have a project component and hobbies in the same project cards
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import {TfiWorld} from 'react-icons/tfi'
import { BsGithub} from "react-icons/bs";
import ProjectCard from '../components/ProjectCard';

function ProjectList() {

  const aviarLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Aviar", icon:<BsGithub size={20}/>},
    {name:"Website", link:"https://aviar.herokuapp.com/", icon: <TfiWorld size={20}/>}
  ]
  const portfolioLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Portfolio-ChaceNielson", icon:<BsGithub size={20}/>}
  ]


  return(
    <section id="Projects" className='section hiddenClass '>
      <SectionHeader title={"Technical Projects"} description={"My Projects Using Various Tech Stacks"} />
      <ul className='projectCardList'>
        <ProjectCard
          name={"GEO Predict"} 
          description={"Full stack application for analysis of drilling data, large data files, react tables and the D3 Library. First project lead position."} 
          img={'/projectPhotos/geothermal.png'} 
          techStackName={"Tech Stack"}
          techStack={["ReactJS", "FastApi", "Postgres", "Tailwind"]}
        />
        <ProjectCard
          name={"Aviar"} 
          description={"Full stack photo sharing application. Uses JWTs for authentication of user accounts. It was deployed on Heroku. "} 
          img={'/projectPhotos/aviar_collections.png'} 
          techStackName={"Mern Stack"}
          techStack={["ReactJS", "FastApi", "Postgres", "Tailwind", "Heroku"]}
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
          internalLink={"VideoGames"}
          />
        <ProjectCard
          name={"Flappy Bird Clone"} 
          description={"A clone of the phone game Flappy Bird, with difficulty progression and save states."} 
          img={'/projectPhotos/CopyRightBird.png'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          internalLink={"VideoGames"}
        />

      </ul>
    </section>
  )
}

export default ProjectList


/***

    <Project 
              name={"Drill Ops"} 
              description={"Full stack application for analysis of drilling data, large data files, react tables and the D3 Library. First project lead position"} 
              img={'/projectPhotos/geothermal.png'} 
              techStack={["ReactJS", "FastApi", "Postgres", "Tailwind"]}
            />
            <Project 
              name={"Aviar"} 
              description={"Full stack photo sharing application. Uses JWTs for authentication of user accounts."} 
              img={'/projectPhotos/aviar_collections.png'} 
              techStackName={"MERN Stack"} 
              techStack={[ "ReactJS", "ExpressJS", "NodeJS", "MongoDB"]} 
              externalLinks={aviarLinks} 
            />
            <Project 
              name={"Portfolio"} 
              description={"My portfolio website made with react."} 
              img={'/projectPhotos/portfolio.png'} 
              techStack={["ReactJS", "Tailwind",]}
              externalLinks={portfolioLinks} 
            />
            <Project 
              name={"Space Survive"} 
              description={"Video game based on asteroids. Includes multiple modes, power ups, achievments and different enemy behaviour"} 
              img={'/projectPhotos/spaceSurvive3.png'} 
              techStack={["Unity Game Engine","C#" ]}
              // internalLink={"VideoGames"}
              />
            <Project 
              name={"Flappy Bird Clone"} 
              description={"A clone of the phone game Flappy Bird"} 
              img={'/projectPhotos/CopyRightBird.png'} 
              techStack={["Unity Game Engine","C#" ]}
              // internalLink={"VideoGames"}
            />

 */