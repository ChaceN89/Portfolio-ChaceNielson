/**
 * Display and Icomn
 */
import React from 'react'

function Skill({icon, label}) {
  return (
    <li className='flex flex-col items-center hover:scale-105'>
      {icon}
      <div className='py-2'>{label}</div>
    </li>
  )
}

export default Skill