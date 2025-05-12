import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper'
import React from 'react'

export default function TechStacks() {
  return (
    <div className='flex w-screen text-white'>
      <BackgroundWrapper
        background="/backgrounds/pexels-16.jpg"
        backgroundClass="w-1/2 min-h-[90vh] relative bg-[center_calc(50%rem)] bg-cover"
        childClass="flex items-center justify-center"
        noise
        fixed
  //         fixedHalf
  // fixedSide="left"
      >
        <h3>Game Developer</h3>
      </BackgroundWrapper>
      <BackgroundWrapper
        background="/backgrounds/pexels-3.jpg"
        backgroundClass="w-1/2 min-h-[90vh] relative bg-[center_calc(50%-7rem)] bg-cover"
        childClass="flex items-center justify-center"
        noise
        // fixed
      >
        <h3>Web Developer</h3>
      </BackgroundWrapper>

    </div>
  )
}
