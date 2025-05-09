import React, { useState } from 'react'
import LinkItem from './LinkItem'
import { navLinks } from '../../data/nav/navData'

export default function NavDesktop() {

  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered index
 
  return (     
    <div className="z-10  items-center gap-4.5 hidden lg:flex">
      {navLinks.map(({ label, icon: Icon, ...linkProps }, index) => (
        <LinkItem key={label} {...linkProps}
          className={` hover:text-accent-alt 
            ${hoveredIndex !== null && hoveredIndex !== index ? 'duration-500 blur-[0.5px]' : 'duration-200'}
          `}
          activeClassName="underline"
          handleMouseEnter={() => setHoveredIndex(index)}
          handleMouseLeave={() => setHoveredIndex(null)} 
        >
          <h6 className=" group flex items-center justify-end  transition-all duration-300 ease-in-out my-drop-shadow ">
            <div
              className="opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-1.5"
            >
              <Icon />
            </div>
            <span className="transition-all duration-400 group-hover:translate-x-3.5 ">
              {label}
            </span>
          </h6>
        </LinkItem>
      ))}
    </div>
  )
}
