/**
 * List to external links
 * Also has a link to the gallery of my photos
 */
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { ImVideoCamera } from "react-icons/im";
import { TfiGallery } from "react-icons/tfi";
import {Link} from 'react-router-dom'

function ExternalLinks({size=25, animate=false}) {
    var delayCss = ""
    if(animate){
        delayCss= " hiddenClass projDelay"
    }

  return (
    <div className='flex space-x-3 md:space-x-6'>
        <a href="https://github.com/ChaceN89" target="_blank" rel="noreferrer" className={' text-white hover:scale-110 hover:text-slate-300 ' + delayCss}>
            <BsGithub size={size}/>
        </a>
        <a href="https://www.linkedin.com/in/chace-nielson" target="_blank" rel="noreferrer" className={' text-white hover:scale-110 hover:text-slate-300 ' + delayCss}>
            <BsLinkedin size={size}/>
        </a>
        <a href="https://www.instagram.com/chacenielson/" target="_blank" rel="noreferrer" className={' text-white hover:scale-110 hover:text-slate-300 ' + delayCss}>
            <BsInstagram size={size}/>
        </a>
        <a href="https://www.youtube.com/channel/UCXcMrM3Vk3TpXu3crQ6Yakg" target="_blank" rel="noreferrer" className={' text-white hover:scale-110 hover:text-slate-300 ' + delayCss}>
            <IoLogoYoutube size={size}/>
        </a>
        <Link to="Gallery" className={' text-white hover:scale-110 hover:text-slate-300 ' + delayCss}>
            <TfiGallery size={size}/>
        </Link>
        <Link to="Videos" className={' text-white hover:scale-110 hover:text-slate-300 ' + delayCss}>
            <ImVideoCamera size={size}/>
        </Link>
    </div>
  )
}

export default ExternalLinks