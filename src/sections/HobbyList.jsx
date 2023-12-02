/**
 * List of all hobbies, used same CSS as project list
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

// All my interests/hobbies as a data list
import { hobbyDataList } from '../data/hobbyDataList'

// retrun compoent for the hobbylist
function HobbyList() {
  return(
    <section id="MyInterests" className='section hiddenClass'>
      <SectionHeader title={"My Hobbies and Interests"} description={"Things I've Picked Up Over The Years"}/>
      <ul className='projectCardList'>
        {hobbyDataList.map((item, index) => (
          <ProjectCard
            name={item.name}
            description={item.description}
            img={item.img}
            techStackName={item.techStackName}
            techStack={item.techStack}
            externalLinks={item.externalLinks}
            modalInfo={item.modalInfo}
          />
        ))}
      </ul>
     
    </section>
  )
}

export default HobbyList