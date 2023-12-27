/**
 * Resuable skill icon and name component
 */
import React from 'react'
import { MdOutlineStar } from "react-icons/md";

function Skill({icon, label, backgroundColour=null, roundedBackground=false, starred=false}) {

  const containerStyles = {
    backgroundColor: backgroundColour ? backgroundColour : 'transparent',
    padding: '2px',
    display: 'inline-block',
    borderRadius: roundedBackground ? '50%': "10%", // Use camelCase for CSS properties in React
  };

  return (
    <li className='flex flex-col items-center justify-end hover:scale-105 '>
      
      {/* icons with the container style */}
      <div style={containerStyles}  >
        {icon}
      </div>
      
      {/* label at the bottom with the star is selected */}
      <div className='py-2 text-center flex justify-left items-center gap-0.5'>      
        {starred && <MdOutlineStar color='yellow'/>}
        <div className='truncate'> {label} </div>
      </div>
    </li>
  )
}

export default Skill