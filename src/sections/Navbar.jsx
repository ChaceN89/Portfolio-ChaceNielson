/**
 * Left side static navbar
 * Link to section of the current page
 */
import React from 'react'
import NavIcon from '../components/NavIcon' // link element 

// react icons
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { GiSkills, GiGiftOfKnowledge } from "react-icons/gi";
import { BsCamera } from "react-icons/bs";
import { FaGuitar, FaAngellist } from "react-icons/fa";
import { MdOutlineConnectWithoutContact, MdOutlinePhotoSizeSelectActual } from "react-icons/md";

function Navbar() {
  return (
    <nav className='fixed inset-y-1/2 -translate-y-48
      ml-0 sm:ml-4 md:ml-6 2xl:ml-12
      -translate-x-20 sm:translate-x-0 
      p-2 md:p-4 
      z-40 w-fit h-fit 
      flex flex-col space-y-6 
      rounded-3xl shadow-lg 
      bg-white bg-opacity-[0.03] 
      text-black text-opacity-50 text-3xl 
      hover:bg-opacity-60 hover:text-opacity-100 ' >
        <NavIcon link={"Home"} Icon={<AiOutlineHome/>} />
        <NavIcon link={"MySkills"} Icon={<GiSkills/>}/>
        <NavIcon link={"PhotoCarousel"} Icon={<MdOutlinePhotoSizeSelectActual/>} />
        <NavIcon link={"MyProjects"} Icon={<GrTask/>}/>
        <NavIcon link={"MyIntrests"} Icon={<FaAngellist/>}/>
        <NavIcon link={"Contact"} Icon={<MdOutlineConnectWithoutContact/>}/>
    </nav>
  )
}

export default Navbar

