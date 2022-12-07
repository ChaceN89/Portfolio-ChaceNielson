/**
 * Left side static navbar
 * Link to section of the current page
 */
import React from 'react'
import NavIcon from '../miniComponents/NavIcon' // link element 

// react icons
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

function Navbar() {
  return (
    <nav className='fixed inset-y-1/2 -translate-y-40 
      ml-0 sm:ml-4 md:ml-6 2xl:ml-12
      -translate-x-20 sm:translate-x-0 
      p-2 md:p-4 
      z-50 w-fit h-fit 
      flex flex-col space-y-6 
      rounded-3xl shadow-lg 
      bg-white bg-opacity-[0.03] 
      text-black text-opacity-50 text-3xl 
      hover:bg-opacity-60 hover:text-opacity-100 ' >
        <NavIcon link={"Home"} Icon={<AiOutlineHome/>} />
        <NavIcon link={"Skills"} Icon={<BiBrain/>}/>
        <NavIcon link={"PhotoCarousel"} Icon={<BsCamera/>} />
        <NavIcon link={"Projects"} Icon={<AiOutlineProject/>}/>
        <NavIcon link={"Hobbies"} Icon={<FaGuitar/>}/>
        <NavIcon link={"Contact"} Icon={<MdOutlineConnectWithoutContact/>}/>
    </nav>
  )
}

export default Navbar

