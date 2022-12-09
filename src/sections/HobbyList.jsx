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
          description={"I play electric guitar and occasionally spend time writing and composing songs with friends."} 
          img={'/photos/guitar1.png'} 
        />
        <ProjectCard
          name={"Snowboading"} 
          description={"I'm always up for a trip to the slopes. There's nothing quite like a powder day."} 
          img={'/photos/snowboard6.png'} 
        />
        <ProjectCard
          name={"Backpacking"} 
          description={"Backpacking is one of my favourite ways to experience nature. There's something about spending days out in the bush that you can't get from a day hike."} 
          img={'/photos/backpacking2.jpg'} 
        />
        <ProjectCard
          name={"Rock Climbing"} 
          description={"Rock climbing is a great activity and combines working with my hands with my love of the outdoors."} 
          img={'/photos/climbing3.jpg'} 
        />
        <ProjectCard
          name={"Hiking"} 
          description={"I've lived near the mountains my whole life and love spending any time in nature."} 
          img={'/photos/mountains8.jpg'} 
        />
        <ProjectCard
          name={"Ice Climbing"} 
          description={"I've also taken my love for rock climbing and taken it into the winter."} 
          img={'/photos/iceClimbing2.jpg'} 
        />
        <ProjectCard
          name={"Guitar Pedals"} 
          description={"I enjoy playing guitar and have taken to building my own guitar pedals."} 
          img={'/projectPhotos/gp_finsihed.jpeg'} 
        />
      </ul>
    </section>
  )
}

export default HobbyList