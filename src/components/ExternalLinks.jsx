/**
 * List to external links
 * Also has a link to the gallery of my photos
 */
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import {Link} from 'react-router-dom'
import ToolTip from './ToolTip';

function ExternalLinks({size=25, animate=false}) {
    var delayCss = ""
    if(animate){
        delayCss= " hiddenClass projDelay"
    }

    // css for all the icons
    const iconCSS =' text-white hover:scale-110 hover:text-slate-300 hover:transition-none '
  
    return (
    <div className={'flex space-x-3 md:space-x-6 group ' +delayCss  }>
        <a href="https://github.com/ChaceN89" target="_blank" rel="noreferrer" className={iconCSS + " " + delayCss}>
            <BsGithub size={size}/>
        </a>
        <a href="https://www.linkedin.com/in/chace-nielson" target="_blank" rel="noreferrer" className={iconCSS + " " + delayCss}>
            <BsLinkedin size={size}/>
        </a>
        <a href="https://www.instagram.com/chacenielson/" target="_blank" rel="noreferrer" className={iconCSS + " " + delayCss}>
            <BsInstagram size={size}/>
        </a>
        <a href="https://www.instagram.com/chacenielson/" target="_blank" rel="noreferrer" className={iconCSS + " " + delayCss}>
            <BsYoutube size={size}/>
        </a>

        <Link to="Gallery" className={iconCSS + " " + delayCss}>
            <ToolTip
                value={  <TfiGallery size={size}/> }
                toolTipText={"My Photo Gallery"}
            />
        </Link>
    </div>
  )
}

export default ExternalLinks