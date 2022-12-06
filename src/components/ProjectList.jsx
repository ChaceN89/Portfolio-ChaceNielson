/**
 * List of Projects 
 * both technical and other project
 * will have a project component and hobbies in the same project cards
 */
import React from 'react'
import Project from '../miniComponents/Project'
import SectionHeader from '../miniComponents/SectionHeader'
import {CgWebsite} from 'react-icons/cg'
import { BsGithub} from "react-icons/bs";

function ProjectList() {

  const aviarLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Aviar", icon:<BsGithub size={20}/>},
    {name:"Website", link:"https://aviar.herokuapp.com/", icon: <CgWebsite size={20}/>}
  ]
  const portfolioLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Portfolio-ChaceNielson", icon:<BsGithub size={20}/>}
  ]

  return (
    <section id="Projects" className='hiddenClass sectionWidth sectionVert'> 
      <SectionHeader title={"Technical Projects"} description={"My Projects Using Various Tech Stacks"} />
      <div className='projectList'>
        <ul>
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
          </ul>
      </div>
      </section>
  )
}

export default ProjectList