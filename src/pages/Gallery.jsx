/**
 * Page containing a gallery of all photos
 */
import React from 'react'
import {carouselData} from '../carouselData'
import SectionHeader from '../components/SectionHeader'

function Gallery() {
  // randomize the data
  const images = carouselData.sort(() => Math.random() - 0.5)

  return (
    <section className='p-5'>
      <SectionHeader title= {"My Gallery"} description={"Some of my photos"}/>
      <div className='gallery p-4 md:p-6'>
        {images.map((item, index)=>{
          return(
            <div className='pics'>
              <img id='image' key={index} src={item.image} alt="..." className=' object-contain rounded-xl py-2 hover:opacity-90'/>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Gallery