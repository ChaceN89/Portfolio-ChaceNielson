import React from 'react'

function SectionHeader({title, description}) {
  return (
    <div className='pt-2 mx-10 sm:mx-20 md:mx-28 lg:mx-36  '>
      <div className="text-5xl font-bold mb-4 text-center">{title}</div>
      <div className="text-2xl font-bold mb-4 text-center"> {description} </div>
    </div>
  )
}

export default SectionHeader