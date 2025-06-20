/**
 * List of all hobbies, used same CSS as project list
 * uses list to display all the project cards containing colunteering infomaiton
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

import { volunteeringDataList } from '../data/volunteeringDataList';


// returns the volunteering list compoent
function VolunteeringList() {
  return(
    <section id="Volunteering" className='section hiddenClass'>
      <SectionHeader title={"Volunteering"} description={"A Few Places I've Lent a Helping Hand"}/>
      <ul className='projectCardList'>
        {volunteeringDataList.map((item, index) => (
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

export default VolunteeringList