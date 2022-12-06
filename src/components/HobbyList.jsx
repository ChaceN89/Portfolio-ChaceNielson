import React from 'react'
import Project from '../miniComponents/Project'
import SectionHeader from '../miniComponents/SectionHeader'

function HobbyList() {
  return (
    <section id="Hobbies" className='hiddenClass sectionWidth sectionVert'> 
      <SectionHeader title={"My Hobbies"} description={"Things Ive Picked Up over the years"}/>

      <div className='projectList '>
        <ul>
            <Project 
              name={"Music"} 
              description={"Electric Guitar and Song Writing "} 
              img={'/photos/guitar1.png'} 
              techStackName={""} 
              // internalLink={"Gallery"}
            />    
            <Project 
              name={"Snowbarding"} 
              description={""} 
              img={'/photos/snowboard6.png'} 
              techStackName={""} 
              // internalLink={"Gallery"}
            />
            <Project 
              name={"Rock Climbing"} 
              description={""} 
              img={'/photos/climbing5.jpg'} 
              techStackName={""} 
              // internalLink={"Gallery"}
            />
            <Project 
              name={"Backpacking"} 
              description={""} 
              img={'/photos/backpacking2.jpg'} 
              techStackName={""} 
              // internalLink={"Gallery"}
            />
            <Project 
              name={"Ice Climbing"} 
              description={""} 
              img={'/photos/iceClimbing2.jpg'} 
              techStackName={""} 
              // internalLink={"Gallery"}
            />
          </ul>
      </div>
      </section>
  )
}

export default HobbyList