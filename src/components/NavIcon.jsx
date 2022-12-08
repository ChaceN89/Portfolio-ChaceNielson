/**
 * Navbar element - will be a ract icon
 * Uses Reactr scoll link to go to the link
 */
import React from "react";
import {Link} from 'react-scroll'

function NavIcon({link, Icon}) {
  return (
      <Link
        className='hover:scale-150 rounded-full transition duration-400 ease-in-out cursor-pointer p-1'
        activeClass="bg-black bg-opacity-20" 
        to={link} spy smooth delay={200} 
      >
          {Icon}
      </Link>
  )
}

export default NavIcon