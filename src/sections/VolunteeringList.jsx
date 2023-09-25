/**
 * List of all hobbies, used same CSS as project list
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { BsInstagram } from "react-icons/bs";


function VolunteeringList() {

  const homesOfHopeDescription = "I participated in the Homes of Hope program, building a home in Tijuana Mexico for a family."

  const basketballLinks = [
    {name:"Instagram", link:"https://www.instagram.com/bowvalleybobcats/", icon:<BsInstagram size={20}/>},
  ]

  return(
    <section id="Volunteering" className='section hiddenClass'>
      <SectionHeader title={"Volunteering"} description={"A Few Places I've Lent a Helping Hand"}/>
      <ul className='projectCardList'>
        <ProjectCard
          name={"Homes of Hope "} 
          description={homesOfHopeDescription} 
          img={'/photos/mexico3.jpg'} 
          modalInfo = {{
            description:homesOfHopeDescription,
            photos:[
              {path:"/photos/mexico2.jpg", description:''},
              {path:"/photos/mexico3.jpg", description:''},
              {path:"/photos/mexico1.jpg", description:''},
            ],
            videos:[
              {path:"/videos/Mexico.mp4", description:''}
            ]
          }}
        />
        <ProjectCard
          name={"Basketball Coach"} 
          description={"I've worked closely with the the Bow Vallay Bobcats basketball program in Cochrane. I help coach the boy during the year and help with the local spring league team. "} 
          img={"/photos/basketball_bobcats.png"} 
          externalLinks={basketballLinks} 
        />
      </ul>
    </section>
  )
}

export default VolunteeringList