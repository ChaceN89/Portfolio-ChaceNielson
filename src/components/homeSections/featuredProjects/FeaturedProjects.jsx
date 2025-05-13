import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper'
import React from 'react'

export default function FeaturedProjects() {

  // const background = "/backgrounds/pexels-0.jpg";
  // const background = "/backgrounds/pexels-3-.jpg"; 

  // Laptop
  // const backgrounds = [
  //   "/backgrounds/pexels-0.jpg",
  //   "/backgrounds/pexels-0-1.jpg",
  //   "/backgrounds/computer-1.png",
  // ]
  const backgrounds = [
    "/backgrounds/blank-compute-blue.jpg",
    "/backgrounds/blank-computer-red.jpg",
    "/backgrounds/blank-computer-stars.jpg",

  ]

  // const backgrounds = [
  //   "/backgrounds/pexels-3-2.jpg",
  //   "/backgrounds/pexels-11-1.jpg",
  //   "/backgrounds/keyboard-2.jpg",
  // ]

  return (
    <div className='border-4'>
      <h1 className='p-10'> Featured Work</h1>
      <BackgroundWrapper
        background={backgrounds[0]}
        backgroundClass=' border-4'
        childClass='flex items-center justify-center h-screen w-screen '
        fixed
      >
        <div className='border-4 w-[40vw] h-[40vh]'>Project 1 image</div>
      </BackgroundWrapper>

      <BackgroundWrapper
        background={backgrounds[1]}
        backgroundClass='border-4 border-red-900'
        childClass='flex items-center justify-start min-h-screen pl-[33.33%]'
        fixed
      >
        Project 2
      </BackgroundWrapper>
      <BackgroundWrapper
        background={backgrounds[2]}
        backgroundClass='border-4 border-blue-900'
        childClass='flex items-center justify-start min-h-screen pl-[33.33%]'
        fixed
      >
        Project 3
      </BackgroundWrapper>

    </div>
  )
}
