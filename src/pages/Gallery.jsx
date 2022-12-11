/**
 * Page containing a gallery of all photos
 */
import React, { useState } from 'react'
import { carouselData } from '../carouselData'
import SectionHeader from '../components/SectionHeader'
import { AiOutlineClose } from 'react-icons/ai'
import { BsArrow90DegLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Gallery() {
  // for model pop up
  const [modal, setModal] = useState(false)
  const [tempImage, setTempImage] = useState("")

  // fore escape key to escape model
  document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      setModal(false)
    }
  });
  // functions for setting modal status and value
  const getImg =(e)=>{
    setTempImage(e)
    setModal(true)
  }
  const onClose =()=>{
    setModal(false)
  }

  return (
    <section className=' '>
      <div className='fixed top-10 left-10'>
        <Link to="/">
        <BsArrow90DegLeft className='p-1 fixed top-6 left-6 hover:text-white hover:opacity-100 opacity-40 hover:scale-105 cursor-pointer'  onClick={onClose}  size={40}/>
        </Link>
      </div>

      <div className='py-10 container mx-auto px-2 sm:px-7 md:px-10 '>
        <SectionHeader title= {"My Gallery"} description={"Some of my photos"}/>
      </div>

      <div className={modal ? "h-full model isOpen" : "h-0 modal"} >
        <img id='image'  src={tempImage} alt="...model" className=''/>
        <AiOutlineClose className='p-1 fixed top-6 right-6 hover:text-white hover:opacity-100 opacity-40 hover:scale-105 cursor-pointer'  onClick={onClose}  size={40}/>
      </div>
 
      <div className='gallery p-4 md:p-6'>
        {carouselData.map((item, index)=>{
          return(
            <div className='pics rounded-3xl'>
              <img id='image' onClick={()=>getImg(item.image)} key={index}  src={item.image} alt="..." className=' object-contain rounded-xl py-2 cursor-pointer '/>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Gallery