/**
 * Page containing a gallery of all photos
 */
import React, { useState } from 'react'
import {carouselData} from '../carouselData'
import SectionHeader from '../components/SectionHeader'

function Gallery() {
  // randomize the data
  // const images = carouselData.sort(() => Math.random() - 0.5)

    // for model pop up
  const [model, setModel] = useState(false)
  const [tempImage, setTempImage] = useState("")


  const getImg =(e)=>{
    setTempImage(e)
    setModel(true)
  }
  const ccc =()=>{
    setModel(false)
  }

  return (
    <section className='p-5'>
      <SectionHeader title= {"My Gallery"} description={"Some of my photos"}/>

      <div className={model ? "model isOpen" : "modal"} onClick={ccc} >
        <img id='image'  src={tempImage} alt="...model" className='  rounded-xl '/>
        
      </div>




      <div className='gallery p-4 md:p-6'>
        {carouselData.map((item, index)=>{
          return(
            <div className='pics'>
              <img id='image' onClick={()=>getImg(item.image)} key={index} src={item.image} alt="..." className=' object-contain rounded-xl py-2 hover:opacity-60'/>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Gallery