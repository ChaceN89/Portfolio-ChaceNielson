import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({name, description, img, techStackName="Tech Stack", techStack=[], externalLinks=[],  internalLink=null}) {

      // set the cursor type base doff internal link
  var cursor= "cursor-default" 
  if (internalLink){ //if there is an internal link to another page set the cusor to be a pointer when over element
    cursor ="cusor-pointer"
  }

  return(   
    <li className='rounded-3xl backdrop-blur-2xl'>
        <div className='overflow-hidden hover:scale-105'>
            <div className='inline-block p-4 '>
                <Link to={internalLink} className={cursor}>
                <div className=' overflow-hidden rounded-3xl'> 
                    <img src={process.env.PUBLIC_URL + img} className='' alt="..."/>
                </div>
                </Link>
            </div>
        </div>

        <div className='-mt-28 py-28 px-5 pb-10 bg-gray-400 bg-opacity-20 shadow-2xl rounded-2xl'>
            <div>{name}</div>
            <div>{description}</div>

            <div className=' flex flex-col items-center  text-black'>
                <div className=''>{techStackName}</div>
                {techStack.map((item)=>{
                    return (<div className='' key={item}>{item}</div>)
                })}
            </div>

            <div className=''>
                {externalLinks.map((item,index)=>{
                    return (
                        <a key={index} href={item.link} target="_blank" rel="noreferrer"
                        className='' 
                        >
                        <div>{item.icon}</div>
                        <div>{item.name}</div>
                    </a>
                    )
                })}
            </div>
        </div>
    </li>
  )
}

export default ProjectCard