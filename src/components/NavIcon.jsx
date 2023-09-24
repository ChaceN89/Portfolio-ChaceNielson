/**
 * Navbar element - will be a ract icon
 * Uses Reactr scoll link to go to the link
 * Has a tool tip to display wher the link is going tp
 */
import React, {useState} from "react";
import {Link} from 'react-scroll'

function NavIcon({link, Icon}) {
  const [showTooltip, setShowTooltip] = useState(false);

  // timer for reset
  let timer;

  const handleMouseEnter = () => {
    // Set a delay of 1200 milliseconds (adjust as needed)
    timer = setTimeout(() => {
      setShowTooltip(true);
    }, 800);
  };

  // reset the timer
  const handleMouseLeave = () => {
    clearTimeout(timer);
    setShowTooltip(false);
  };

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
        <div
          className="relative "          
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Icon}
          {showTooltip && (
            <div className="absolute left-1/2 top-1/2 bg-black bg-opacity-50 backdrop-blur-2xl shadow-2xl rounded-md text-white p-2 text-xs w-fit whitespace-nowrap border border-white  transform translate-x-2">
              {addSpacesToCamelCase(link)}
            </div>
          )}
        </div>
      </Link>
  )
}

export default NavIcon