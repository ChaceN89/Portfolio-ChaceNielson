/**
 * The header at top of most sections
 */
import React from 'react'

function SectionHeader({title, description}) {
  return (
    <div className='container text-center'>
      <div className="text-3xl sm:text-5xl font-bold mb-4 text-center">{title}</div>
      <div className="text-xl sm:text-2xl font-bold text-center"> {description} </div>
    </div>
  )
}

export default SectionHeader