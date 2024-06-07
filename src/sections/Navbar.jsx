/**
 * Left side static navbar
 * Link to section of the current page
 */
import React from 'react'
import NavIcon from '../components/NavIcon' // link element 

// react icons
import { FaHome, FaLaptopCode, FaHandsHelping, FaCommentDots,FaImages, FaCodeBranch, FaHiking} from "react-icons/fa";

function Navbar() {
  return (
    <nav className='fixed inset-y-1/2 -translate-y-60
      ml-0 sm:ml-4 md:ml-6 2xl:ml-12
      -translate-x-20 sm:translate-x-0 
      p-2 md:p-4 
      z-40 w-fit h-fit 
      flex flex-col space-y-6 
      rounded-3xl shadow-lg 
      bg-white bg-opacity-[0.03] 
      text-black text-opacity-50 text-3xl 
      hover:bg-opacity-60 hover:text-opacity-100 ' >
        <NavIcon link={"Home"} Icon={<FaHome/>} />
        <NavIcon link={"MySkills"} Icon={<FaLaptopCode/>} /> {/* Example with FaLaptopCode */}
        <NavIcon link={"MyProjects"} Icon={<FaCodeBranch/>}/>
        <NavIcon link={"MyInterests"} Icon={<FaHiking/>}/>
        <NavIcon link={"Volunteering"} Icon={<FaHandsHelping/>}/>
        <NavIcon link={"MyPhotos"} Icon={<FaImages/>} />
        <NavIcon link={"ContactMe"} Icon={<FaCommentDots/>}/>
    </nav>
  )
}

export default Navbar

