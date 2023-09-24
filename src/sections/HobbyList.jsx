/**
 * List of all hobbies, used same CSS as project list
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

function HobbyList() {
  return(
    <section id="MyIntrests" className='section hiddenClass'>
      <SectionHeader title={"My Hobbies and Intrests"} description={"Things I've Picked Up Over The Years"}/>
      <ul className='projectCardList'>
        <ProjectCard
          name={"Music"} 
          description={"I play electric guitar and occasionally spend time writing and composing songs with friends."} 
          img={'/photos/guitar1.png'} 
          internalLink={"Videos/#Music"}
        />
        <ProjectCard
          name={"Snowboading"} 
          description={"I'm always up for a trip to the slopes. There's nothing quite like a powder day."} 
          img={'/photos/snowboard6.png'} 
          internalLink={"Videos/#Snowboarding"}
        />
        <ProjectCard
          name={"Backpacking"} 
          description={"Backpacking is one of my favourite ways to experience nature. There's something about spending days out in the bush that you can't get from a day hike."} 
          img={'/photos/backpacking2.jpg'} 
          internalLink={"Videos/#Backpacking"}
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
          internalLink={"Videos/#Hiking"}
        />
        <ProjectCard
          name={"Guitar Pedals"} 
          description={"I enjoy playing guitar and have taken to building my own guitar pedals."} 
          img={'/projectPhotos/gp_finsihed.jpeg'} 
        />
        <ProjectCard
          name={"Ice Climbing"} 
          description={"I've also taken my love for rock climbing and taken it into the winter."} 
          img={'/photos/iceClimbing2.jpg'} 
        />
        <ProjectCard
          name={"Homes of Hope "} 
          description={"I participated in the Homes of Hope program, building a home in Tijuana Mexico for a family."} 
          img={'/photos/mexico3.jpg'} 
          internalLink={"Videos/#Mexico"}
        />
      </ul>
    </section>
  )
}

export default HobbyList