/**
 * Photo gallery 
 * carousel of photos of me doing thins
 *  may have links to the gallery page to see the photos more openly
 */
import React from 'react'
import Carousel from '../components/Carousel'
import SectionHeader from '../components/SectionHeader'

function PhotoCarousel() {
  return (
    <section id="MyPhotos" className='section hiddenClass h-full'> 
      <SectionHeader title={"Photo Gallery"} description={"Some of My Interests and Hobbies"}/>
      <Carousel/>
     </section>
  )
}

export default PhotoCarousel