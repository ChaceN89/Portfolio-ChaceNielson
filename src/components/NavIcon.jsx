/**
 * Navbar element - will be a ract icon
 * Uses Reactr scoll link to go to the link
 * Has a tool tip to display wher the link is going tp
 */
import React from "react";
import {Link} from 'react-scroll'
import ToolTip from './ToolTip'

function NavIcon({link, Icon}) {

  // function to add spaces before capitols 
  function addSpacesToCamelCase(inputString) {
    return inputString.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  return (
      <Link
        className='hover:scale-150 rounded-full transition duration-400 ease-in-out cursor-pointer p-1'
        activeClass="bg-black bg-opacity-30" 
        to={link} spy smooth delay={200} 
      >
        <ToolTip
          value={Icon}
          toolTipText={addSpacesToCamelCase(link)}
        />
      </Link>
  )
}

export default NavIcon