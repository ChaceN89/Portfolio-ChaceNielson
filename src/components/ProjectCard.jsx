/**
 * Main project card to dispaly a project or a hobby as well
 * can have lots of text or no text
 * Arguments
 name - the name of the project
description - a breif description
img - image path relative to public folder
techStackName - name of tech stack used, default is null but common to use "Tech Stack"
techStack - List of all technologies used as part of tech stack ["a", "b"]
internalLink - link to internal page example "Gallery" ->   internalLink={"Gallery"}

externalLinks - List of external link to show at bottom, list if a lsit of objects with following strucutre
{name:"name", link:"url", icon:<Icon size={20}/>
 * 
 */
import React from 'react'
import { Link } from 'react-router-dom'
import InnerProjectCard from './InnerProjectCard'

function ProjectCard({name, description, img, techStackName=null, techStack=[], externalLinks=[],  internalLink=null}) {

      // set the cursor type base doff internal link
  var cursor= "cursor-default" 
  if (internalLink){ //if there is an internal link to another page set the cusor to be a pointer when over element
    cursor ="cusor-pointer"
  }

  return(   
    <li className='h-full rounded-3xl backdrop-blur-2xl overflow-hidden hiddenClass projDelay  '>
        <div className=' overflow-hidden hover:scale-105'>
            <div className='inline-block p-4 '>
                <Link to={internalLink} className={cursor}>
                <div className=' overflow-hidden rounded-3xl'> 
                    <img src={process.env.PUBLIC_URL + img} className='' alt="..."/>
                </div>
                </Link>
            </div>
        </div>

        <div className='-mt-32 pt-32 px-1.5 sm:px-5  pb-4 bg-gray-400 bg-opacity-20 shadow-2xl rounded-2xl h-full'>
            <InnerProjectCard
                name={name}
                description={description}
                techStackName={techStackName}
                techStack={techStack}
                externalLinks={externalLinks}
            />
        </div>
    </li>
  )
}

export default ProjectCard