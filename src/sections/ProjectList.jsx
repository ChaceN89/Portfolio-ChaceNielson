/**
 * List of Projects 
 * both technical and other project
 * will have a project component and hobbies in the same project cards
 */
import React from 'react'
import Project from '../miniComponents/Project'
import SectionHeader from '../components/SectionHeader'
import {CgWebsite} from 'react-icons/cg'
import { BsGithub} from "react-icons/bs";
import ProjectCard from '../components/ProjectCard';

function ProjectList() {

  const aviarLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Aviar", icon:<BsGithub size={20}/>},
    {name:"Website", link:"https://aviar.herokuapp.com/", icon: <CgWebsite size={20}/>}
  ]
  const portfolioLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Portfolio-ChaceNielson", icon:<BsGithub size={20}/>}
  ]


  return(
    <section id="Projects" className='section'>
      <SectionHeader title={"Technical Projects"} description={"My Projects Using Various Tech Stacks"} />
      <ul className='projectCardList'>
        <ProjectCard
          name={"GEO Predict"} 
          description={"Full stack application for analysis of drilling data, large data files, react tables and the D3 Library. First project lead position"} 
          img={'/projectPhotos/geothermal.png'} 
          techStack={["ReactJS", "FastApi", "Postgres", "Tailwind"]}
          internalLink={"Gallery"}
        />
        <ProjectCard
          name={"Drill Ops"} 
          description={"Full stack application for analysis of drilling data, large data "} 
          img={'/photos/mountains8.jpg'} 
          techStack={["ReactJS", "FastApi", "Postgres", "Tailwind"]}
        />
        <ProjectCard
          name={"Drill Ops"} 
          description={"Full stack application for analysis of drilling data, large data files, react ta lonmg Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam placeat aliquid, alias aspernatur sed repellendus et, laborum consequatur corporis neque itaque odit libero blanditiis recusandae excepturi. Non eligendi, laudantium, nulla natus minus explicabo vitae vel eaque autem alias quaerat, expedita illum assumenda asperiores rerum!"} 
          img={'/photos/climbing4.jpeg'} 
          externalLinks={aviarLinks} 
        />
          <ProjectCard
          name={"Drill Ops"} 
          description={"Full stack application for analysis of drilling data, large data files, react ta lonmg Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam placeat aliquid, alias aspernatur sed repellendus et, laborum consequatur corporis neque itaque odit libero blanditiis recusandae excepturi. Non eligendi, laudantium, nulla natus minus explicabo vitae vel eaque autem alias quaerat, expedita illum assumenda asperiores rerum!"} 
          img={'/photos/backpacking4.jpeg'} 
          externalLinks={aviarLinks} 
        />
        <ProjectCard
          name={"Drill Ops"} 
          description={""} 
          img={'/photos/backpacking4.jpeg'} 
          externalLinks={aviarLinks} 
        />
        <ProjectCard
          name={"Drill Ops"} 
          description={""} 
          img={'/photos/backpacking4.jpeg'} 
          externalLinks={aviarLinks} 
        />
        <ProjectCard
          name={"Portfolio"}
          
          description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, iste incidunt recusandae, minima atque fuga neque pariatur eveniet quasi obcaecati id asperiores nihil ipsam distinctio cupiditate explicabo. Reprehenderit, dignissimos adipisci?"} 
          img={'/projectPhotos/portfolio.png'} 
          externalLinks={aviarLinks} 
        />
        <ProjectCard 
              name={"Space Survive"} 
              description={"Video game based on asteroids. Includes multiple modes, power ups, achievments and different enemy behaviour"} 
              img={'/projectPhotos/spaceSurvive3.png'} 
              techStack={["Unity Game Engine","C#" ]}
              // internalLink={"VideoGames"}
              />
            <ProjectCard
              name={"Flappy Bird Clone"} 
              description={"A clone of the phone game Flappy Bird"} 
              img={'/projectPhotos/CopyRightBird.png'} 
              techStack={["Unity Game Engine","C#" ]}
              // internalLink={"VideoGames"}
            />

      </ul>
    </section>
  )





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