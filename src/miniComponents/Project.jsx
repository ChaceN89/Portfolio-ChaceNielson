/**
 * A single Project car
 * 
name - name of project
description - description of projec
img - image path relative to public folder
techStackName -name of tech stack optional- default =Tech Stack
techStack - list of Tools used ["a", b]
externalLinks - list of external link object  [{name:"display", link:"link to the website"}]
internalLink - name of local page bto go to ex. 'Gallery'
  - makes whole project card a link to that page
 * 
 */
import React from 'react'
import { Link } from "react-router-dom";

function Project({name, description, img, techStackName="Tech Stack", techStack=[], externalLinks=[],  internalLink=null}) {
 
  // set the cursor type base doff internal link
  var cursor= "cursor-default" 
  if (internalLink){ //if there is an internal link to another page set the cusor to be a pointer when over element
    cursor ="cusor-pointer"
  }



  return (
    <div className='proAnimation hiddenClass '>
    <div className='
    bg-slate-400 bg-opacity-5 grid grid-cols-3 shadow-2xl 
      backdrop-blur-xl rounded-lg bg-blend-normal 
      border border-opacity-0 border-white hover:border-opacity-40
      hover:scale-105'>


      <img src={process.env.PUBLIC_URL + img} className=' bg-black col-span-2 rounded-tl-lg rounded-br-lg  h-full w-full object-scale-down 
									' alt="..."/>
      
      <div className=' flex flex-col items-center  text-black'>
          <div className='font-bold text-lg w-full underline text-center rounded-tr-lg mb-1 bg-slate-50 bg-opacity-70'>{techStackName}</div>
          {techStack.map((item)=>{
            return (
              <div className='rounded-xl bg-slate-300 font-bold w-fit  py-0.5 px-2 m-1 text-center' key={item}>{item}</div>
            )
          })}
      </div>

      <Link to={internalLink} className={` ${cursor} pb-4 rounded-bl-lg col-span-2`}>
          <div className="px-3 pb-1 pt-1.5 font-bold  text-2xl sm:text-3xl underline">{name}</div>
          <div className='px-3  text-xs sm:text-sm text-left'>{description}</div>
      </Link>

      <div className='pl-2 flex flex-col justify-around space-y-1 py-4'>
          {externalLinks.map((item, index)=>{ //display all external links
            return (
              <a key={index} href={item.link} target="_blank" rel="noreferrer"
                className='z-10 flex justify-center items-center pr-4 mx-2
                  py-1 rounded-2xl hover:bg-white hover:text-black hover:font-bold space-x-1 select-none' 
              >
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </a>
            )
          })}
      </div>
    </div>
    </div>
  )

}

export default Project
