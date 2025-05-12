import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper'
import React from 'react'

import ImageComponent from '@/components/uiElements/images/ImageComponent'
import TechStackSection from './TechStackSection'



import { fullstack } from '@/data/techStacks/full-stack'
import { gameDesign } from '@/data/techStacks/game-design'


export default function TechStacks() {


  return (
    <div className='flex flex-col lg:flex-row w-screen text-white md:h-[100vh]'>
      <BackgroundWrapper
        background="/backgrounds/pexels-2.jpg"
        backgroundClass="lg:w-1/2 relative  bg-cover min-h-[50vh] "
        childClass="flex items-center justify-center"
        noise
        fixed
      >
        <BackgroundWrapper
          background="/backgrounds/pexels-2.jpg"
          backgroundClass=" m-10 rounded-[30px] relative  bg-cover  p-20 border-2 border-white/20 min-h-[80vh]"
          childClass="flex items-center justify-center"
          noise
          blur={2}
          fixed
        >
          <TechStackSection
            title={"Web Dev"}
            techStack={fullstack}
          />
        </BackgroundWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper
        background="/backgrounds/pexels-17.jpg"
        backgroundClass="lg:w-1/2 relative  bg-cover min-h-[50vh] "
        childClass="flex items-center justify-center"
        noise
        fixed
      >
        <BackgroundWrapper
          background="/backgrounds/pexels-17.jpg"
          backgroundClass=" m-10 rounded-[30px] relative  bg-cover  p-20 border-2 border-white/20 min-h-[80vh]"
          childClass="flex items-center justify-center"
          noise
          blur={2}
          fixed
        >
          <TechStackSection
            title={"Game Dev"}
            techStack={gameDesign}
          />
        </BackgroundWrapper>
      </BackgroundWrapper>


    </div>
  )
}


funcction
