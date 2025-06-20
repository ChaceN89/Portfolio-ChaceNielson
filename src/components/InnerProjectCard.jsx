/**
 * Inner area of the project card containing the text, seperate to make this easier to work with 
 */
import React from 'react'
import ProjectLinks from './ProjectLinks'
import TechStack from './TechStack'

function InnerProjectCard({name, description, techStackName=null, techStack=[], externalLinks=[]}) { 
  return(
    <div>
      <div className='sm:p-2 font-bold text-2xl sm:text-3xl underline'>{name}</div>
      <div className='sm:px-2'>{description}</div>
      <div className='flex-col'>
        <TechStack techStack={techStack} techStackName={techStackName} />
        <ProjectLinks externalLinks={externalLinks}/>
      </div>
    </div>
  )
}

export default InnerProjectCard