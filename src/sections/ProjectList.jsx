/**
 * List of Projects 
 * both technical and other project
 * will have a project component and hobbies in the same project cards
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard';

//All project data in a list 
import { projectDataList } from '../data/projectDataList';

// retruns project ist component
function ProjectList() {
  return(
    <section id="MyProjects" className='section hiddenClass '>
      <SectionHeader title={"My Technical Projects"} description={"Some Of My Projects Using Various Tech Stacks"} />
      <ul className='projectCardList'>
        {projectDataList.map((item, index) => (
          <ProjectCard
            starred={item.starred}
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

export default ProjectList
