/**
 * Page containing a gallery of all photos
 */
import React, { useState } from 'react'
import {carouselData} from '../carouselData'
import SectionHeader from '../components/SectionHeader'
import {AiOutlineClose} from 'react-icons/ai'
function Gallery() {
  // randomize the data
  // const images = carouselData.sort(() => Math.random() - 0.5)

    // for model pop up
  const [model, setModel] = useState(false)
  const [tempImage, setTempImage] = useState("")


  
  document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      setModel(false)
    }
  });

  const getImg =(e)=>{
    setTempImage(e)
    setModel(true)
  }
  const onClose =()=>{
    setModel(false)
  }

  return (
    <section className='p-5'>
      <SectionHeader title= {"My Gallery"} description={"Some of my photos"}/>

      <div className={model ? "model isOpen" : "modal"} >
        <img id='image'  src={tempImage} alt="...model" className='  '/>
        <AiOutlineClose className='p-1 fixed top-6 left-6 hover:text-slate-500 hover:scale-105 cursor-pointer'  onClick={onClose}  size={40}/>
      </div>

      <div className='gallery p-4 md:p-6'>
        {carouselData.map((item, index)=>{
          return(
            <div className='pics'>
              <img id='image' onClick={()=>getImg(item.image)} key={index} src={item.image} alt="..." className=' object-contain rounded-xl py-2 hover:opacity-90'/>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Gallery