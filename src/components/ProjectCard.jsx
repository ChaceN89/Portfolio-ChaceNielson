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
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import InnerProjectCard from './InnerProjectCard'

import { AiOutlineClose } from 'react-icons/ai'
import { BsArrow90DegLeft } from "react-icons/bs";
import ModalProjectCard from './ModalProjectCard';

function ProjectCard({name, description, img, techStackName=null, techStack=[], externalLinks=[], modelPopUp=null}) {

    // set the cursor type base doff internal link
    var cursor= "cursor-default" 
    if (modelPopUp){ //if there is an internal link to another page set the cusor to be a pointer when over element
        cursor ="cusor-pointer"
    }

    const [modal, setModal] = useState(false)
    const toggleModal=()=>{
        if (modelPopUp != null){
            setModal(!modal)
        }
    }

    // fore escape key to escape model
    document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
            setModal(false)
        }
    });


  return(   
    <div>
        <li className='h-full rounded-3xl backdrop-blur-2xl border border-gray-400 border-opacity-10 border-dotted overflow-hidden hiddenClass projDelay  '>
            <div className=' overflow-hidden hover:scale-105'>
                <div className='inline-block p-3 '>
                    <button onClick={toggleModal} className={cursor}>
                    <div className='overflow-hidden rounded-3xl'> 
                        <img src={process.env.PUBLIC_URL + img} className='' alt="..."/>
                    </div>
                    </button>
                </div>
            </div>

            <div className='-mt-32 pt-32 px-1.5 sm:px-5 pb-4 bg-gray-400 bg-opacity-20 shadow-2xl rounded-2xl h-full'>
                <InnerProjectCard
                    name={name}
                    description={description}
                    techStackName={techStackName}
                    techStack={techStack}
                    externalLinks={externalLinks}
                    />
            </div>
        </li>

        {/* modal PopUp */}
        <div className={modal ? "fixed h-screen w-screen model isOpen z-40" : "h-0 modal"} >
            <AiOutlineClose className='closeModal'  onClick={toggleModal}  size={40}/>
            <ModalProjectCard
            
            />
        </div>
    </div>
  )
}

export default ProjectCard