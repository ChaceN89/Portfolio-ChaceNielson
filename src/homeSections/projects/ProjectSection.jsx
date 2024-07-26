import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projectData';

function ProjectSection() {

  return (
    <section className='min-h-section-height border-2 border-white p-4 '>
      <div className='grid grid-cols-3 gap-4'>

      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          project={project}
        />
      ))}
{/* 
        <ProjectCard name='Glas Gecko Game Website' description='This is a project' image='https://picsum.photos/450/300' link='https://glassgeckogames.netlify.app/'/>
        <ProjectCard name='Test project 2' description='This is a project' image='https://picsum.photos/450/300' link='https://glassgeckogames.netlify.app/'/>
        <ProjectCard name='Test project 3' description='This is a project' image='https://picsum.photos/450/300' link='https://glassgeckogames.netlify.app/'/>
        <ProjectCard name='Test project 4' description='This is a project' image='https://picsum.photos/450/300' link='https://glassgeckogames.netlify.app/'/>
        <ProjectCard name='Test project 5' description='This is a project' image='https://picsum.photos/450/300' link='https://glassgeckogames.netlify.app/'/>
        <ProjectCard name='Test project 6' description='This is a project' image='https://picsum.photos/450/300' link='https://glassgeckogames.netlify.app/'/>
        <ProjectCard name='Test project 7' description='This is a project' image='https://picsum.photos/450/300' link='https://glassgeckogames.netlify.app/'/>
        <ProjectCard name='Test project 8' description='This is a project' image='https://picsum.photos/450/300' link='https://glassgeckogames.netlify.app/'/> */}
      </div>
    </section>
  )
}

export default ProjectSection;
