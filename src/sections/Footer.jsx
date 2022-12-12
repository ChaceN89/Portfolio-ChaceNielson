/**
 * Footer component at the bottom of the page
 * Contains Avatar image, link back to top with My Name, and list of links to see my other stuff
 */
import React from 'react'
import ExternalLinks from '../components/ExternalLinks';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className=" text-lg bg-white bg-opacity-10 backdrop-blur-xl shadow-lg h-fit py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-5 md:justify-around h-h-fit">

        <img className="w-fit sm:h-36 rounded-full object-top" src={process.env.PUBLIC_URL + '/portaits/portrait1.png'} alt="..."/>
        <Link className='cursor-pointer text-4xl font-bold' duration={500} to={"Home"} spy smooth > Chace Nielson </Link>
        <div></div>
        <ExternalLinks size={25}/>
      </div>
    </footer>
  )
}

export default Footer