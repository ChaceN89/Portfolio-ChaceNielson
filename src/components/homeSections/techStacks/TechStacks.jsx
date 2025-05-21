import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper'
import React, { useState } from 'react'

import TechStackSection from './TechStackSection'


import { fullstack } from '@/data/techStacks/full-stack'
import { gameDesign } from '@/data/techStacks/game-design'


export default function TechStacks() {

  // Organized list of sections
  const sectionList = [
    {
      teachStack: fullstack,
      background: "/backgrounds/controller-6.jpg",
      index: 1,
      translation: "translate-y-[40%] translate-x-[40%]"
    },
    {
      teachStack: gameDesign,
      background: "/backgrounds/computer-1.jpg",
      index: 2,
      translation: "-translate-y-[40%] lg:translate-y-[40%] -translate-x-[40%]"
    }
  ]

  // For which of the categories is currently hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return(
    <div className='flex flex-col lg:flex-row w-screen '>
      {sectionList.map((section, index) => (
        <BackgroundWrapper
          key={index}
          background={section.background}
          backgroundClass={`lg:w-1/2 p-12 `}
          childClass="flex items-center justify-center h-full"
          noise
          blur={hoveredIndex !== null && hoveredIndex !== section.index ? 0 : 5}
        >
          <TechStackSection
            techStack={section.teachStack}
            index={section.index}
            hoverIndex={hoveredIndex}
            handleMouseEnter={() => setHoveredIndex(section.index)}
            handleMouseLeave={() => setHoveredIndex(null)}
            translation={section.translation}
          />
        </BackgroundWrapper>
      ))}

    </div>
  )
}
