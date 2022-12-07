/**
 * Footer component at the bottom of the page
 * Contains Avatar image, link back to top with My Name, and list of links to see my other stuff
 */
import React from 'react'
import ExternalLinks from '../miniComponents/ExternalLinks';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="text-lg flex items-center 
      flex-col justify-center space-y-5 space-x-10
      md:flex-row  md:justify-around md:space-y-0 md:px-32 
      bg-white bg-opacity-10
      backdrop-blur-xl shadow-lg
      h-fit py-6"
    >
      <img className="w-fit h-36 rounded-full object-cover" src={process.env.PUBLIC_URL + '/portaits/portrait1.png'} alt="..."/>
      <Link className='cursor-pointer text-4xl font-bold' duration={500} to={"Home"} spy smooth > Chace Nielson </Link>
      <ExternalLinks size={25}/>
    </footer>
  )
}

export default Footer