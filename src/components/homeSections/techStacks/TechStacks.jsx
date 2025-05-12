import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper'
import React from 'react'

import ImageComponent from '@/components/uiElements/images/ImageComponent'
import TechStackSection from './TechStackSection'



import { fullstack } from '@/data/techStacks/full-stack'
import { gameDesign } from '@/data/techStacks/game-design'


export default function TechStacks() {

  return(
    <div className='flex flex-col lg:flex-row w-screen '>
      <Section
        title={"Web Dev"}
        techStack={fullstack}
        background="/backgrounds/keyboard-1.jpg"
        backgroundClass="bg-secondary/20 "
      />
      <Section
        title={"Game Dev"}
        techStack={gameDesign}
        background="/backgrounds/controller-6.jpg"
        textStyle = "text-primary outlined-text"
      />
    </div>
  )

}

function Section({ title, techStack, background, textStyle="text-secondary" }) {
  return (
    <BackgroundWrapper
      background={background}
      backgroundClass={`lg:w-1/2  p-10  `}
      childClass={"flex items-center justify-center  " + textStyle}
      noise
      blur={1.5}
    >
      <TechStackSection 
        title={title} 
        techStack={techStack} 
        description={techStack.description}
      />
    </BackgroundWrapper>
  );
}
