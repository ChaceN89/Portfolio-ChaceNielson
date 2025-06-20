/**
 * Resuable skill icon and name component
 * can use the regular icon or a name of an svg icon in the svg-icons folder in public
 */
import React from 'react'
import { MdOutlineStar } from "react-icons/md";

function Skill({icon, SVG_path, label, backgroundColour=null, roundedBackground=false, starred=false}) {

  const containerStyles = {
    backgroundColor: backgroundColour ? backgroundColour : 'transparent',
    padding: '2px',
    display: 'inline-block',
    borderRadius: roundedBackground ? '50%': "5%", // Use camelCase for CSS properties in React
  };

  return (
    <li className='flex flex-col items-center justify-end hover:scale-105 '>
      
      {/* icons with the container style */}
      <div style={containerStyles}>
        {icon}
        {SVG_path && (
          <img
            src={`${process.env.PUBLIC_URL}/svg-icons/${SVG_path}`}
            alt={label}
            width={65}
            height={65}
          />
        )}
      </div>
      
      {/* label at the bottom with the star is selected */}
      <div className='py-2 text-center flex justify-left items-center gap-0.5'>      
        {starred && <MdOutlineStar color='#FFD700'/>}
        <div className='truncate'> {label} </div>
      </div>
    </li>
  )
}

export default Skill