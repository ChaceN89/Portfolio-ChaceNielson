/**
 * Photo gallery 
 * carousel of photos of me doing thins
 *  may have links to the gallery page to see the photos more openly
 */
import React from 'react'
import Carousel from '../miniComponents/Carousel'
import SectionHeader from '../miniComponents/SectionHeader'

function PhotoCarousel() {
  return (
    <section id="PhotoCarousel" className=' hiddenClass sectionWidth sectionVert min-h-screen'> 
      <SectionHeader title={"Photo Gallery"} description={"Some of my Interests"}/>
      <Carousel/>
     </section>
  )
}

export default PhotoCarousel