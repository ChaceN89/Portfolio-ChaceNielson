/**
 * List to external links
 * Also has a link to the gallery of my photos
 */
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
// import { TfiGallery } from "react-icons/tfi";
// import {Link} from 'react-router-dom'

function ExternalLinks({size=25}) {
  return (
    <div className='flex space-x-6'>
        <a href="https://github.com/ChaceN89" target="_blank" rel="noreferrer" className='text-white hover:scale-110 hover:text-slate-300'>
            <BsGithub size={size}/>
        </a>
        <a href="https://www.instagram.com/chacenielson/" target="_blank" rel="noreferrer" className='text-white hover:scale-110 hover:text-slate-300'>
            <BsInstagram size={size}/>
        </a>
        <a href="https://www.linkedin.com/in/chace-nielson" target="_blank" rel="noreferrer" className='text-white hover:scale-110 hover:text-slate-300'>
            <BsLinkedin size={size}/>
        </a>
        <a href="https://www.youtube.com/channel/UCXcMrM3Vk3TpXu3crQ6Yakg" target="_blank" rel="noreferrer" className='text-white hover:scale-110 hover:text-slate-300'>
            <IoLogoYoutube size={size}/>
        </a>
        {/* <Link to="Gallery" className='text-white hover:scale-110 hover:text-slate-300'>
            <TfiGallery size={size}/>
        </Link> */}

    </div>
  )
}

export default ExternalLinks