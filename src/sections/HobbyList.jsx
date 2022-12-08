/**
 * List of all hobbies, used same CSS as project list
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

function HobbyList() {
  return(
    <section id="Hobbies" className='section hiddenClass'>
      <SectionHeader title={"My Hobbies"} description={"Things Ive Picked Up over the years"}/>
      <ul className='projectCardList'>
        <ProjectCard
          name={"Music"} 
          description={"Electic guitar and song writing. I've even started soldering guitar pedals in my free time."} 
          img={'/photos/guitar1.png'} 
        />
        <ProjectCard
          name={"Snowboading"} 
          description={"I'm always up for a trip to the slopes. Theres nothing quite like a powder day."} 
          img={'/photos/snowboard6.png'} 
        />
        <ProjectCard
          name={"Backpacking"} 
          description={"bckpacking is one of my favourite wasy to experience nature. Theres somthing about spending days out in the bush that you can't get from a day hike."} 
          img={'/photos/backpacking2.jpg'} 
        />
        <ProjectCard
          name={"Rock Climbing"} 
          description={"Rock climbing is a great activity and combines working with my hands with my love of the outdoors."} 
          img={'/photos/climbing3.jpg'} 
        />
        <ProjectCard
          name={"Hiking"} 
          description={"I've lived near the mountians my whole live and love spending any time in nature "} 
          img={'/photos/mountains8.jpg'} 
        />
        <ProjectCard
          name={"Ice Climbing"} 
          description={"I've lived near the mountians my whole live and love spending any time in nature "} 
          img={'/photos/iceClimbing2.jpg'} 
        />
        <ProjectCard
          name={"Guitar Pedal"} 
          description={"I enjoy playing guitar and have taken to building my own guitar pedals"} 
          img={'/projectPhotos/gp_finsihed.jpeg'} 
        />
      </ul>
    </section>
  )
}

export default HobbyList