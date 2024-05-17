/**
 * Inner area of the project card containing the text, seperate to make this easier to work with 
 */
import React from 'react'
import ProjectLinks from './ProjectLinks'
import TechStack from './TechStack'

function InnerProjectCard({name, description, techStackName=null, techStack=[], externalLinks=[]}) {
  return (
    <div className='flex justify-between'>
        <div className='flex flex-col justify-between space-y-4'>
            <div>
                <div className='p-0.5 sm:p-2 font-bold text-2xl sm:text-3xl underline'>{name}</div>
                <div className='p-0.5 sm:px-2'>{description}</div>
            </div>

            <ProjectLinks externalLinks={externalLinks}/>
        </div>

        <TechStack techStack={techStack} techStackName={techStackName} />

    </div>
  )
}

export default InnerProjectCard