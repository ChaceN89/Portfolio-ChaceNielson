import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

function HobbyList() {
  return(
    <section id="Projects" className='section'>
      <SectionHeader title={"My Hobbies"} description={"Things Ive Picked Up over the years"}/>
      <ul className='projectCardList'>

        <ProjectCard
          name={"Drill Ops"} 
          description={"Full stack application for analysis of drilling data, large data "} 
          img={'/photos/mountains8.jpg'} 
        />
          <ProjectCard
          name={"Drill Ops"} 
          description={"Full stack application for analysis of drilling data, large data files, react ta lonmg Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam placeat aliquid, alias aspernatur sed repellendus et, laborum consequatur corporis neque itaque odit libero blanditiis recusandae excepturi. Non eligendi, laudantium, nulla natus minus explicabo vitae vel eaque autem alias quaerat, expedita illum assumenda asperiores rerum!"} 
          img={'/photos/backpacking4.jpeg'} 
        />
        <ProjectCard
          name={"Drill Ops"} 
          description={""} 
          img={'/photos/backpacking4.jpeg'} 
        />
        <ProjectCard
          name={"Drill Ops"} 
          description={""} 
          img={'/photos/backpacking4.jpeg'} 
        />
      </ul>
    </section>
  )
}

export default HobbyList