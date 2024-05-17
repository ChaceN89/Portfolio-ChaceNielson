/**
 * Main project card to dispaly a project or a hobby as well
 * can have lots of text or no text
 * Arguments
name - the name of the project
description - a breif description
img - image path relative to public folder
techStackName - name of tech stack used, default is null but common to use "Tech Stack"
techStack - List of all technologies used as part of tech stack ["a", "b"]
externalLinks - List of external link to show at bottom, list if a lsit of objects with following strucutre
    {name:"name", link:"url", icon:<Icon size={20}/>
modalInfo:{
    description - a longer description for the modal popup
    photos - a lsit of photos {image:url,descritpion:option desctipon}
    videos a lsit of videos {path :url,descritpion:option desctipon}
    useGallery - bool to use the gallery for photos in modal
}
 * 
 */
import React, { useState, useEffect, useRef } from 'react';
import InnerProjectCard from './InnerProjectCard'

import { AiOutlineClose } from 'react-icons/ai'
import ModalProjectCard from './ModalProjectCard';
import { useIsInViewport } from '../functions/useIsInViewport';

// google Analytics with // Function to track page view
import { recordGAEvent } from '../functions/googleAnalytics';

import { MdOutlineStar } from "react-icons/md";

function ProjectCard({starred, name, description, img, techStackName=null, techStack=[], externalLinks=[], modalInfo=null}) {

    // set the cursor type base doff internal link
    var cursor= "cursor-default" 
    if (modalInfo){ //if there is an internal link to another page set the cusor to be a pointer when over element
        cursor ="cusor-pointer"
    }

    // for the modal and the toggle if modal Inof contains data
    const [modal, setModal] = useState(false)
    const toggleModal=()=>{
        if (modalInfo != null){
            setModal(!modal)
        }
        recordGAEvent("Open Modal", name, "Project list")
    }

    // fore escape key to escape model
    document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
            setModal(false)
        }
    });

    // create reference for paretn - when the ref changes and if it changes to not in view close the modal
    const ref1 = useRef(null);
    const isInViewport1 = useIsInViewport(ref1);
    useEffect(() => {
      if (!isInViewport1){ // if not in viewport
        setModal(false)
      }
    }, [isInViewport1])
    

  return(   
    <div ref={ref1}>
        <li className='h-full rounded-3xl backdrop-blur-2xl border border-gray-400 border-opacity-5 border-hidden overflow-hidden hiddenClass projDelay  '>
            <div className=' overflow-hidden hover:scale-105'>
                <div className='inline-block p-3 '>
                    <button onClick={toggleModal} className={cursor}>
                    {starred &&
                        <MdOutlineStar className='fixed' color='#FFD700' size={30}/>
                    }

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
        {modalInfo &&
            <div className={modal ? "fixed h-screen w-screen model isOpen overflow-hidden z-40" : "h-0 modal"} >
                {modal && // onlu render if modal is open
                    <>
                        <AiOutlineClose className='closeModal'  onClick={toggleModal}  size={60}/>
                        <ModalProjectCard
                            title={name}
                            techStack={techStack}
                            modalInfo={modalInfo}
                            externalLinks={externalLinks}
                        />
                    </>
                }
            </div>
        }
    </div>
  )
}

export default ProjectCard